'use strict';

var mongoose = require('mongoose'),
  Pisa = mongoose.model('Pisa');//TODO: Pisa

exports.get_all_questions = function (req, res, next) {
  Pisa.find({}, function (err, pisaQuestions) {
    if (err)
      return next(err);
    if (!pisaQuestions)
      return next(Error('questions does not exist'));

    res.pisaQuestions = pisaQuestions;
    return next();
  });
}

exports.get_pisa_by_id = function(req, res, pisa_id, next) {
  Pisa.find({_id: pisa_id}, function(err, question) {
    if (err)
      return next(err);
    if (!question)
      return next(Error('לא נמצאה שאלה'));
    if (question.length)
      res.pisaQuestion = question[0];
    return next();
  })
}