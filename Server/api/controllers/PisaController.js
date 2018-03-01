//import { retry } from '../../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';
var notificationController = require('./notificationController');
var async = require('async');
var _ = require('underscore');
var mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    Session = mongoose.model('Session'),
    User = mongoose.model('User'),
    Pisa = mongoose.model('Pisa');

var pisaUtils = require('../../pisaUtils/answerCheck');

var contestController = require('./contestController');

const PISA_CATEGORY = "חברתי"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 1. success and random pisa - if founded one with same level and category
 *          2. false  and message - otherwize
 */
module.exports.getRandomPisaQuestion = function (req, res) {
    var pisaLevel = req.query.level;
    var pisaCategory = req.query.category;
    var pisaLanguage = req.query.language;
    var levels = ['easy', 'medium', 'hard'];
    var userId = req.query.user_id;


    if (levels.indexOf(pisaLevel) == -1) {
        res.json({ success: false, message: 'level not found' });
    } else {

        User.findById(userId, function (err, user) {

            if (err) {
                return res.json({ success: false, message: err.message });
            }

            if (!user) {
                return res.json({ success: false, message: "user not found" });
            }



            var seensPisas = user.seen_pisas || [];

            Category.find({ _id: pisaCategory, status: 'active' }).exec(function (err, category) {
                if (err) {
                    res.json({ success: false, message: err.message });
                } else if (!category) {
                    res.json({ success: false, message: 'category id not found' });
                } else {
                    Pisa.find({ status: 'active', category: pisaCategory, level: pisaLevel, language: pisaLanguage, _id: { $nin: seensPisas } }).exec(function (err, pisaObj) {
                        if (err) {
                            res.json({ success: false, message: err.message });
                        } else if (!pisaObj) {
                            res.json({ success: false, message: 'no objects in pisa model' });
                        } else {
                            var amountObj = pisaObj.length;
                            if (amountObj == 0) {
                                if (pisaLevel == 'hard') { // if thers is no hard pisas try search for medium
                                    Pisa.find({ status: 'active', category: pisaCategory, level: 'medium', language: pisaLanguage, _id: { $nin: seensPisas } }).exec(function (err, pisaObj) {
                                        if (err) {
                                            res.json({ success: false, message: err.message });
                                        } else if (!pisaObj) {
                                            res.json({ success: false, message: 'no objects in pisa model' });
                                        } else {
                                            var amountObj = pisaObj.length;
                                            var randomNumber = Math.floor(Math.random() * amountObj);
                                            res.json({ success: true, pisaObj: { _body: pisaObj[randomNumber] } });
                                        }
                                    })
                                }
                                if (pisaLevel == 'medium') { // if thers is no medium pisas try search for easy
                                    Pisa.find({ status: 'active', category: pisaCategory, level: 'easy', language: pisaLanguage, _id: { $nin: seensPisas } }).exec(function (err, pisaObj) {
                                        if (err) {
                                            res.json({ success: false, message: err.message });
                                        } else if (!pisaObj) {
                                            res.json({ success: false, message: 'no objects in pisa model' });
                                        } else {
                                            var amountObj = pisaObj.length;
                                            var randomNumber = Math.floor(Math.random() * amountObj);
                                            res.json({ success: true, pisaObj: { _body: pisaObj[randomNumber] } });
                                        }
                                    })
                                }
                                if (pisaLevel == 'easy') { // if thers is no easy pisas try search for medium
                                    Pisa.find({ status: 'active', category: pisaCategory, level: 'medium', language: pisaLanguage, _id: { $nin: seensPisas } }).exec(function (err, pisaObj) {
                                        if (err) {
                                            res.json({ success: false, message: err.message });
                                        } else if (!pisaObj) {
                                            res.json({ success: false, message: 'no objects in pisa model' });
                                        } else {
                                            var amountObj = pisaObj.length;
                                            var randomNumber = Math.floor(Math.random() * amountObj);
                                            res.json({ success: true, pisaObj: { _body: pisaObj[randomNumber] } });
                                        }
                                    })
                                }
                            }
                            else {
                                var randomNumber = Math.floor(Math.random() * amountObj);
                                res.json({ success: true, pisaObj: { _body: pisaObj[randomNumber] } });
                            }
                        }
                    });
                }
            });

        })



    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res
 * @returns success = true, if pisa obj created
 *          success = false & message = err.message otherwize 
 */
module.exports.createPisaQuestion = function (req, res) {
    var pisaObj = req.body;
    var newPisa = new Pisa(pisaObj);
    newPisa.save(function (err, pisa) {
        if (err)
            res.json({ success: false, message: err.message });
        else
            res.json({ success: true, id: pisa });
    });
}



module.exports.getQuestionById = function (req, res, next) {
    Pisa.findById(req.params.question_id, function (err, question) {
        if (err) {
            return next(err);
        }

        res.json(question);
    })
}


/**
 * Get all questions for a certain level
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports.listPisaQuestions = function (req, res, next) {

    var level = req.query.level;
    var skip = req.query.skip;
    var limit = req.query.limit;
    var language = req.query.lang || 'he';

    async.waterfall([
        // eventually the static categories 
        // should be inserted to the db
        // when the server starts, so you can't 
        // query based on the id, only by name,
        // which means 'name' must be unique
        async.apply(getCategoryByName, PISA_CATEGORY),
        function (category, cb) {
            var query = {
                level: level,
                category: category._id,
                language: language
            };
            cb(null, query);
        },
        getQuestionsByCategoryAndLevel

    ], function (err, questions) {
        if (err) {
            return next(err);
        }
        res.json(questions);
    });
}

// TODO on a standalone pisa
// this function will completely break.
// separate standalone and in-session pisa
module.exports.checkAnswers = function (req, res, next) {

    var questionId = req.params.question_id;

    var userAnswers = req.body.answers;
    var user_id = req.body.user._id;
    if (user_id) {
        user_id = user_id.trim();
    }


    var contest = req.body.contest;

    questionId = questionId.trim();
    checkQuestion(questionId, userAnswers, function (err, result) {
        if (err) {
            return next(err);
        }

        if (!checkFailure(result.failed) || contest) { // pass pisa !

            sortAnswers(userAnswers, questionId, function (err, answers) {
                if (err) {
                    return next(err);
                }

                if (contest) {
                    async.waterfall([
                        async.apply(updatePassedQuestionForUser, req, res, contest, questionId),
                        function (results, cb) {
                            var currentStage = contest.stages[0]._id;
                            cb(null, results, contest._id, currentStage, answers, questionId)
                        },
                        saveAnswers
                    ], function (err, result) {
                        if (err) {
                            return next(err);
                        }

                        res.send(result);
                    })
                }


                // User.findOneAndUpdate(
                //     { _id: user_id, 'contest_stages.contest_index': contest.index },
                //     { $inc: { "contest_stages.$.stage": 1 }, "contest_stages.$.onPisa": false, $addToSet: { "seen_pisas": questionId } },
                //     { upsert: true, 'new': true },
                //     function (err, user) {
                //         if (err)
                //             return next(err)
                //         if (user) {
                //             if (req.body.user.contest_stages[0].stage === contest.stages.length) {
                //                 req.body.email_type = 'reached_last_stage'
                //                 notificationController.send_notification_email(req, res, function (err, res) {
                //                     if (err) {
                //                         throw err;
                //                     }
                //                 })
                //             }
                //             else {
                //                 //Send an email notification if user passed

                //                 req.body.email_type = 'pass';
                //                 notificationController.send_notification_email(req, res, function (err, res) {
                //                     if (err) {
                //                         throw err;
                //                     }
                //                 });
                //             }

                //             res.json({ result: 'passed', continue: 'correct', user: user })
                //         }

                //     })
            })

        } else {

            res.send({ failed: result.failed })
        }
    });

}


function updatePassedQuestionForUser(req, res, contest, questionId, cb) {

    var user_id = req.body.user._id;
    if (user_id) {
        user_id = user_id.trim();
    }


    contestController.getProgressForUser(user_id,function (err, progress) {
        if (err) {
            return cb(err)
        }

        var videoPass = 3;
        var pisaPass = 5;

        var done = false;

        if (Object.keys(progress.answered['0']).length === videoPass) {
            if (Object.keys(progress.answered['1']).length === pisaPass) {
                done = true
            }
        }

        User.findOneAndUpdate(
            { _id: user_id, 'contest_stages.contest_index': contest.index },
            { $addToSet: { "seen_pisas": questionId } },
            { upsert: true, 'new': true },
            function (err, user) {
                if (err) {
                    return cb(err)
                }

                if (done) {
                    req.body.email_type = 'reached_last_stage'
                    // notificationController.send_notification_email(req, res, function (err, res) {
                    //     if (err) {
                    //         throw err;
                    //     }
                    // })
                }
                else {
                    //Send an email notification if user passed
                    
                    req.body.email_type = 'pass';
                    // notificationController.send_notification_email(req, res, function (err, res) {
                    //     if (err) {
                    //         throw err;
                    //     }
                    // });
                }

                cb(null, { result: 'passed', continue: 'correct', user: user });

            });

    })




}



/**
 * 
 * @param {Object} results 
 * @param {String} contest mongo id
 * @param {String} stage mongo id
 * @param {Array} answers sorted by order in questions
 * @param {Function} cb 
 */
function saveAnswers(results, contest, stage, answers, questionID, cb) {

    var session = new Session();
    session.user = results.user._id;
    session.result = results.result;
    session.answers = answers;
    session.contest = contest;
    session.isPisa = true;
    session.stage = stage;
    session.pisaID = questionID;
    session.save(function (err) {
        if (err) {
            return cb(err);
        }

        cb(null, results)
    });
}


function sortAnswers(userAnswers, questionId, cb) {


    Pisa.findById(questionId, function (err, pisa) {
        if (err) {
            return cb(err);
        }

        var all = [];
        var questionsIds = pisa.questions.map(function (question) {
            return question._id ? question._id.toString() : '';
        });


        for (var key in userAnswers) {
            var element = userAnswers[key];
            if (Array.isArray(element)) {

                element._id = key;
                all.push(element)
            }
        }

        all = all.sort(function (a, b) {
            var aIndex = questionsIds.indexOf(a._id);
            var bIndex = questionsIds.indexOf(b._id);

            // question not answered
            if (aIndex == -1 || bIndex == -1) {
                return 1;
            }

            return aIndex <= bIndex ? aIndex : bIndex;
        });

        cb(null, _.flatten(all));
    });
}


function checkFailure(failedQuestions) {
    if (Object.keys(failedQuestions).length > 0) {
        var all = []
        for (var id in failedQuestions) {
            if (failedQuestions.hasOwnProperty(id)) {
                var element = failedQuestions[id];
                all = all.concat(element)
            }
        }

        return all.length > 0;
    }

    return false
}

/**
 * 
 * Checks the user's answers on the pisa question.
 * Every nested question's correct_answers are validated 
 * against the user's input.If a question fails, the failed
 * question data (its index - meaning the index of the input inside a question).
 * The result will look something like the following:
 * 
 * The key is the nested question's _id.
 * The value array contains all the failed indexes.
 * {
 *    "5a68ab48e3898b5398b82232":[1,3]
 * }
 * 
 * 
 * @param {String} questionId 
 * @param {Object} answers each key is a PisaQuestion _id. Its value is an array
 * of answers passed in the same order they were presented to
 * the user.
 * @param {Function} cb 
 */
function checkQuestion(questionId, answers, cb) {
    Pisa.findOne({ _id: questionId }, function (err, question) {


        if (err) {
            return cb(err);
        }

        var failed = {};
        question.questions.forEach(function (question) {


            var id;
            if (question._id) {
                id = question._id.toString();

                var answerForQuestion = answers[id];

                var failedForQuestion = {};
                // if no answer for question
                // consider passed
                if (answerForQuestion) {
                    failedForQuestion = pisaUtils.check(question, answerForQuestion);
                }

                failed = _.extend(failed, failedForQuestion);
            }

        });



        cb(null, { failed: failed });

    });
}



/**
 * Get all questions for a category
 * and a certain level
 * 
 * @param {String} categoryId 
 * @param {String} level 
 * @param {Function} cb 
 */
function getQuestionsByCategoryAndLevel(query, options, cb) {
    if (typeof options == 'function') {
        cb = options;
        options = {
            skip: 0,
            limit: 200
        };
    }
    Pisa
        .find(query)
        .skip(options.skip)
        .limit(options.limit)
        .select({ title: 1, description: 1 })
        .exec(cb);
}


/**
 * 
 * @param {String} name 
 * @param {Function} cb 
 */
function getCategoryByName(name, cb) {

    Category.findOne({ name: name }, cb);

}

function compareArrays() {
    var arrays = [].slice.call(arguments);
    return _.all(arrays, function (array) {
        return array.length == arrays[0].length && _.difference(array, arrays[0]).length == 0;
    });
}