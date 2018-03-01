'use strict';

var notificationController = require('./notificationController');
var mongoose = require('mongoose'),
  Contest = mongoose.model('Contest'),
  Stage = mongoose.model('Stage'),
  Session = mongoose.model('Session'),
  Group = mongoose.model('Group'),
  User = mongoose.model('User'),
  MissionProgress = mongoose.model('MissionProgress');

var async = require('async');
var _ = require('underscore');

exports.get_all_contests = function (req, res, next) {
  Contest.find({}).populate('category', 'name').exec(function (err, contests) {
    if (err)
      return next(err);
    if (!contests)
      return next(Error('contests does not exist'));

    res.json(contests);
  });
}

exports.get_contest = function (req, res, next) {
  Contest.findById(req.params.contest_id).populate('category').populate('stages').exec(function (err, contest) {
    if (err)
      return next(err);
    if (!contest)
      return next(Error('contest does not exist'));

    contest.stages = contest.stages.sort(function (a, b) {
      return a.index - b.index
    });

    res.json(contest);
  });
}

exports.get_contest_by_index = function (req, res, next) {
  Contest.findOne({
    index: req.params.contest_index
  }).populate('stages').populate('category').exec(function (err, contest) {
    if (err)
      return next(err);
    if (!contest)
      return next(Error('No Contest with index'));

    contest.stages = contest.stages.sort(function (a, b) {
      return a.index - b.index
    });
    res.json(contest);
  });
}

exports.get_users_contests = function (req, res, next) {
  Contest.find({
    participants: req.params.user_id
  }, function (err, contests) {
    if (err)
      return next(err);
    if (!contests)
      return next(Error('User\'s contests not found'));

    res.json(contests);
  });
}

/**
 * TODO: finish
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.joinContest = function (req, res, next) {
  console.log('inside the contest controller');
  // Updating contest_index in the UserDB. 
  Contest.findOne({
    index: req.body.contest_index
  }, function (err, contest) {
    if (err)
      return next(err);

    if (contest) {
      User.findByIdAndUpdate(req.body.user_id, {
        $push: {
          contest_stages: {
            contest_index: req.body.contest_index,
            stage: 1
          }
        }
      }, function (err, user) {
        if (err)
          return next(err);
        res.json(user);
      });
    }
  });
}

exports.get_stage = function (req, res, next) {
  Stage.findById(req.body.stage_id, function (err, stage) {
    if (err)
      return next(err);
    if (!stage)
      return next(Error('Stage does not exist'));

    // console.log('how many stages in total are there?: ' + JSON.stringify(stage));

    res.json(stage);
  });
}

/**
TODO:
 * Add verification for right answer
 * 
 */
exports.answer_stage = function (req, res, next) {
  var user_id = req.body.user._id;
  var contest = req.body.contest;
  var stage = req.body.stage;
  var answer = new Session(req.body);

  var correct = undefined;
  var increase = false;
  /**
   * Must check answers
   */
  //TODO: special code regex
  if (answer.answers == 'A9') {
    correct = true;
    console.log('Special');
  }

  switch (stage.question_type) {
    case 'multiselect':
    case 'select':
      //Must use it that way since correct initialized to be undefined
      if (answer.answers && stage.correct_answer.length) {
        if (answer.answers.equals(stage.correct_answer)) {
          correct = true;
        } else
          correct = false;
      }
      break;
    case 'cases':
      //Must use it that way since correct initialized to be undefined
      if (stage.correct_answer.includes(answer.answers))
        correct = true;
      else
        correct = false;

      break;
    case 'text':
      //Text answers has no correct answer, validate regex..
      if (answer)
        console.log(answer)
      break;
    case 'video':
      console.log('video answer')
      break;
    case 'missions':
      console.log('missions answer')
      break;
  }

  switch (stage.continue_when) {
    case 'any': //Continue no matter the answer..
      increase = true;
      break;
    case 'correct': //continue when correct.
      increase = correct != undefined ? correct : false;
      break;
    case 'date': // Continue when time has come..
      increase = (new Date().getTime() > contest.stages[stage.index].from.getTime());
      break;
    case 'correct-date': //Continue when correct and time came.
      increase = (correct && (new Date().getTime() > contest.stages[stage.index].from.getTime()))
      break;
  }

  answer.result = correct == undefined ? 'noResult' : correct ? 'passed' : 'failed';
  //set result.. pass/failed/no result


  // console.log('Number of stages: ' + contest.stages.length);
  // console.log('Current stage: ' + req.body.user.contest_stages[0].contest_index);

  // increase = false;

  answer.save(function (err, session) {
    if (err)
      return next(err)
    if (session) {
      if (increase) {
        User.findById(user_id, function (err, user) {
          if (stage.pisa_questions_difficulty.length) { // stage has pisa
            if (!req.body.user.contest_stages[0].onPisa) { // finish stage, update onpisa to true
              User.findOneAndUpdate({ _id: user_id, 'contest_stages.contest_index': contest.index }, { "contest_stages.$.onPisa": true }, { 'new': true }, function (err, user) {
                if (err)
                  return next(err)
                if (user) {


                  res.json({ result: session.result, data: user, continue: stage.continue_when, increased: increase })
                }
                //Return something else when not increasing..
              });
            }
            else { // finish pisa 
              User.findOneAndUpdate({ _id: user_id, 'contest_stages.contest_index': contest.index }, { $inc: { "contest_stages.$.stage": 1 }, "contest_stages.$.onPisa": false }, { upsert: true, 'new': true }, function (err, user) {
                if (err)
                  return next(err)
                if (user) {
                  if (req.body.user.contest_stages[0].stage === contest.stages.length) {
                    req.body.email_type = 'reached_last_stage'
                    // notificationController.send_notification_email(req, res, function (err, res) {
                    //   if (err) {
                    //     throw err;
                    //   }
                    // })
                  }
                  else {
                    //Send an email notification if user passed/failed.
                    req.body.email_type = answer.result;
                    // notificationController.send_notification_email(req, res, function (err, res) {
                    //   if (err) {
                    //     throw err;
                    //   }
                    // });
                  }
                  //

                  //   req.body.email_type = 'fail || pass...'
                  //   notificationController.send_notification_email(req, res, function (err, res) {
                  //     console.log('sent');
                  //     if (err)
                  //       console.error(err);
                  //   });
                  //   //
                  res.json({ result: session.result, data: user, continue: stage.continue_when, increased: increase })
                }
                //Return something else when not increasing..
              });
            }
          } else {
            User.findOneAndUpdate({ _id: user_id, 'contest_stages.contest_index': contest.index }, { $inc: { "contest_stages.$.stage": 1 } }, { upsert: true, 'new': true }, function (err, user) {
              if (err)
                return next(err)
              if (user) {
                //
                if (req.body.user.contest_stages[0].stage === contest.stages.length - 1) {
                  req.body.email_type = 'reached_last_stage'
                  // notificationController.send_notification_email(req, res, function (err, res) {
                  //   if (err) {
                  //     throw err;
                  //   }
                  // })
                }
                else {
                  //Send an email notification if user passed/failed.
                  req.body.email_type = answer.result;
                  // notificationController.send_notification_email(req, res, function (err, res) {
                  //   if (err) {
                  //     throw err;
                  //   }
                  // });
                }

                res.json({ result: session.result, data: user, continue: stage.continue_when, increased: increase })
              }
              //Return something else when not increasing..
            });
          }
        })

      }
      else
        res.json({ result: session.result, data: session, continue: stage.continue_when, increased: increase })
    }
    else {
      return next(Error('אירעה שגיאה בשמירת התשובה'))
    }
  });
}

Array.prototype.contains = function (element) {
  return this.indexOf(element) > -1;
}

// 
// Warn if overriding existing method
if (Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}

module.exports.saveMissionProgress = function (req, res, next) {

  var user = req.params.user_id;

  if (!user) {
    return next(new Error('no user'));
  }

  var p = { answered: req.body.answered, earnedPoints: req.body.earnedPoints };

  Group.findOne({ users: user }, function (err, group) {
    if (err) {
      return next(err);
    }
    if (group) {
      var otherUsers = group.users.filter(function (gu) {
        return user != gu;
      })

      async.each(otherUsers, function (u, cb) {
        updateUserProgress(u, p, cb);
      }, function (err) {
        if (err) {
          console.log(JSON.stringify(err, null, 2));
        }
      });
    }


  });


  updateUserProgress(user, p, function (err, prog) {
    if (err) {
      return next(err);
    }

    res.send(prog);
  });
}

function updateUserProgress(userId, p, cb) {


  MissionProgress.findOneAndUpdate(
    { user: userId },
    {
      answered: p.answered,
      earnedPoints: p.earnedPoints,
      user: userId
    },
    {
      new: true,
      upsert: true
    }
  )
    .lean()
    .exec(function (err, progress) {
      if (err) {
        return cb(err);
      }
      if (!progress.answered['0']) {
        progress.answered['0'] = {};
      }
      cb(null, progress);
    })
}



module.exports.getMissionProgress = function (req, res, next) {
  var user = req.params.user_id;

  if (!user) {
    return next(new Error('no user'));
  }

  module.exports.getProgressForUser(user, function (err, progress) {
    if (err) {
      return next(err);
    }

    res.send(progress);
  });

}


module.exports.getProgressForUser = function (userId, cb) {

  MissionProgress
    .findOne({ user: userId })
    .lean()
    .exec(function (err, progress) {
      if (err) {
        return next(err);
      }

      if (!progress) {
        progress = {
          answered: {
            0: {},
            1: {}
          },
          earnedPoints: 0
        };
      }
      cb(null, progress);
    })
}



function compareArrays() {
  var arrays = [].slice.call(arguments);
  return _.all(arrays, function (array) {
    return array.length == arrays[0].length && _.difference(array, arrays[0]).length == 0;
  });
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {
  enumerable: false
});