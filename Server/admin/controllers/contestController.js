'use strict';

var mongoose = require('mongoose'),
  Contest = mongoose.model('Contest'),
  Stage = mongoose.model('Stage'),
  User = mongoose.model('User');

var async = require('async')

exports.get_all_contests = function (req, res, next) {
  Contest.find({}).populate('category').exec(function (err, contests) {
    if (err)
      return next(err);
    if (!contests)
      return next(Error('contests does not exist'));
    res.contests = contests;
    return next();
  });
}

exports.get_contest = function (req, res, next) {
  Contest.findById(req.body.contest_id).populate('category').populate('stages').exec(function (err, contest) {
    if (err)
      return next(err);
    if (!contest)
      return next(Error('contest does not exist'));

    contest.stages = contest.stages.sort(function (a, b) {
      return a.index - b.index
    });
    res.contest = contest;
    return next();
  });
}

// exports.get_users_contests = function (req, res, next) {
//   res.usersContests = new Map();
//   User.find({ status: 'active' }, function (err, users) {
//     if (!err && users) {
//       async.each(users, function (element, cb) {
//         Contest.find({ participants: element.id }, function (err, contests) {
//           if (err)
//             return cb(err);
//           if (!contests)
//             return cb(Error('User\'s contests not found'));
//           res.usersContests.set(element.id, contests);
//           return cb();
//         });
//       }, function(err) {
//         if (!err)
//         return next();
//       });
//     }
//     else
//       return next(Error('No users'));
//   });
// }

exports.update_contest = function (req, res, next) {
  var contest = new Contest(req.body);
  if (req.body.id) {
    Contest.findOneAndUpdate({
      'id': contest.id
    }, contest, function (err, result) { });
  } else {
    Contest.create(contest, function (err, newContest) {
      return next();
    });
  }
}

exports.publish_contest = function (req, res, cb) {
  var data = req.body;
  var contestID = data.contestID;
  var publish = data.publish;

  Contest.findByIdAndUpdate(contestID, {
    published: publish === "true" ? true : false
  }, {
      upsert: true
    }, function (err, result) {
      return cb();
    })
}

exports.get_stage = function (req, res, next) {
  Stage.findById(req.body.stage_id, function (err, stage) {
    if (err)
      return next(err);
    if (!stage)
      return next(Error('Stage does not exist'));

    res.stage = stage;
    return next();
  });
}

exports.update_stage = function (req, res, next) {
  if (req.body.pisa_questions_difficulty && req.body.pisa_questions_difficulty.length) {
    req.body.pisa_questions_difficulty = req.body.pisa_questions_difficulty.split(',')
  }
  else {
    req.body.pisa_questions_difficulty = []
  }
  var stage = req.body; //new Stage(req.body);
  if (stage.question_type === 'video') {
    stage.video_question = [{}]
    if (typeof stage.video_type === 'string') {
      stage.video_type = [stage.video_type];
    }
    stage.video_type.forEach(function (elem, index, video_types) {
      stage.video_question[index] = {}
      stage.video_question[index].video_type = elem;
      stage.video_question[index].question_text = stage.question_text[index];
      stage.video_question[index].question_text_arabic = stage.question_text_arabic ? stage.question_text_arabic[index] : '';

      if (stage.video_question[index].video_type === 'select') {
        stage.video_question[index].select = stage.select[index];
        delete stage.select[index];
      }
      if (stage.video_question[index].video_type === 'multiselect') {
        stage.video_question[index].multi_options = stage.multi_options[index];
        delete stage.multi_options[index]
      }
      if (stage.video_question[index].video_type === 'select' || stage.video_question[index].video_type == 'multiselect') {
        stage.video_question[index].correct_answer = stage.correct_answer[index];
        delete stage.correct_answer[index]
      }
    });
  }
  //stage.question.question_text = stage.question;
  if (req.body.id) {
    Stage.findByIdAndUpdate(stage.id, stage, function (err, result) {
      if (!err)
        return next();
      else
        return next('Error updating stage');
    });
  } else {
    //Remove empty pisa - not-required..
    if (stage.pisa_questions_difficulty.length == 0)
      delete stage.pisa_questions_difficulty
    Stage.create(stage, function (err, newStage) {
      console.log(err)
      if (!err) {
        Contest.findByIdAndUpdate(stage.contest_id, {
          $push: {
            stages: newStage.id
          }
        }, function (err, res) {
          if (!err)
            return next();
          else
            return next('Error inserting stage to contest');
        });
      } else
        return next(err.message);
    });
  }
}

exports.updateStagesIndex = function (req, res, next) {
  var currentItem = 0;
  var stages = req.body.data;
  if (stages.length) {
    stages.forEach(function (item, index) {
      Stage.findByIdAndUpdate(item, {
        index: (index + 1)
      }, function (err, updatedStage) {
        if (err)
          return next(err);
        if (!updatedStage)
          return next(Error('משתמש לא נמצא במערכת'));
      });
      currentItem++;
      if (currentItem === stages.length)
        next();
    }, this);
  } else
    return next();
}

exports.deleteStage = function (req, res, cb) {
  Contest.findByIdAndUpdate(req.body.contest_id, {
    $pull: {
      stages: req.body._id
    }
  }, function (err, updatedContest) {
    if (!err)
      Stage.update({
        "_id": req.body._id
      }, {
          "status": "deleted"
        }, function (err, updatedStage) {
          if (err)
            return cb(err);
          if (!updatedStage)
            return cb(Error('שלב לא נמצא במערכת'));
          cb();
        })
    else
      return cb(err);
  });
}

Array.prototype.contains = function (element) {
  return this.indexOf(element) > -1;
}