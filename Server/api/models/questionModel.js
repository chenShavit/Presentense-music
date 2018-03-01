'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectID = mongoose.ObjectID;

var QuestionSchema = new Schema({

    question_text: {
        type: String,
        Required: 'question is required'
    },
    question_text_arabic: {
        type: String,
        Required: 'question is required'
    },
    answer_type: {
        type: String,
        enum: ['file', 'text', 'select', 'multiselect', 'cases'],
    },
    index: {
        type: Number
    },
    question_type: {
        type: Schema.Types.ObjectId,
        ref: 'QuestionType'
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    },
    select: [{
        type: String
    }],
    // TODO: ^^^ correct answer in select ^^^
    multi_options: [{
        type: String
    }],
    cases: [{
        type: String
    }]
    /*** FreeText ***/
    /*** Location (Multi-free-text-options) ***/
    /*** Missions ***/
    /*** Phases ***/
    /*** File Upload ***/
    /*** Video Question ***/
    /*** Multi Choice ***/
    /*** Single Choice ***/
});

QuestionSchema.add({ questions: [QuestionSchema] });


var uniqueValidator = require('mongoose-unique-validator');
QuestionSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// QuestionSchema.pre('validate', function(next) {
//     next();
// });
//              6        5       1               1       1       1               1
var all = ['missions', 'video', 'free_text', 'cases', 'file', 'multiselect', 'select']


QuestionSchema.pre('save', function (next) {

    if (this.questions && this.questions.length) {
        var valid = this.questions.every(function (q) {
            // get question type
            // check that order is smaller


            return true;
        })

    }

    next();
});

// delete some field from json
QuestionSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = QuestionSchema;
module.exports = mongoose.model('Question', QuestionSchema); // Question collection
