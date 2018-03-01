'use strict';

var async = require('async');
var mongoose = require('mongoose'),
  Contest = mongoose.model('Contest'),
  Stage = mongoose.model('Stage');

exports.get_all_questions = function (req, res, next) {
  Stage.find({}).select('question_text question_text_arabic').exec(function (err, questions) {
    if (err)
      return next(err);
    if (!questions)
      return next(Error('questions does not exist'));

    res.questions = questions;
    return next();
  });
}

exports.get_all_questions_for_contest = function (req, res, next) {
  Contest.findById(req.body.contest_id).populate('category').populate('stages').exec(function (err, questions) {
    if (err)
      return next(err);
    if (!questions)
      return next(Error('questions does not exist'));

    res.contest_questions = questions;
    return next();
  });
}

exports.updateTranslations = function (req, res, cb) {
  var arabic_questions = req.body.question_text_arabic;
  var stage_details = req.body.stage_details_arabic;
  var questions = req.body.question_id;

  async.forEachOf(questions, function (question, index, next) {
    Stage.findByIdAndUpdate(question, { question_text_arabic: arabic_questions[index], stage_details_arabic: stage_details[index] }, function (err, updatedStage) {
      if (err)
        return next(err);
      else
        return next()
    });
  }, function (err) {
    if (!err)
      return cb();
    else
      return cb(err);
  });
}
