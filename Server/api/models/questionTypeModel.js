'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectID = mongoose.ObjectID;

var QuestionTypeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        enum: ['missions', 'video', 'free_text', 'cases', 'file', 'multiselect', 'select'],
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    },
    order: {
        type: Number
    }
});


var uniqueValidator = require('mongoose-unique-validator');
QuestionTypeSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// QuestionTypeSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
QuestionTypeSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = QuestionTypeSchema;
module.exports = mongoose.model('QuestionType', QuestionTypeSchema); // QuestionType collection
