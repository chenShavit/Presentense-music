'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PisaSchema = new Schema({
    language: {
        type: String,
        enum: ['he', 'ar']
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    level: {
        type: String,
        enum: ['very-easy', 'easy', 'medium','hard', 'very-hard']
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    showInDesktop: {
        type: Boolean
    },
    showInMobile: {
        type: Boolean,
    },
    addGeoGebra: {
        type: Boolean
    },
    ggb_file: {
        type: String
    },
    questions: [{
        type: {
            type: String,
            enum: ['1', '2', '3']
        },
        content: {
            type: String,
        },
        correct_answers: [String],
        options: [{
            type: String
        }]
    }],
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    }
});



var uniqueValidator = require('mongoose-unique-validator');
PisaSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// PisaSchema.pre('validate', function(next) {
//     next();
// });



PisaSchema.pre('save', function (next) {

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
PisaSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = PisaSchema;
module.exports = mongoose.model('Pisa', PisaSchema); // Pisa collection