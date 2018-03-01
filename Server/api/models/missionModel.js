'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectID = mongoose.ObjectID;

var MissionSchema = new Schema({

    question: {
        type: ObjectID,
        Required: 'question is required'
    },
    question_type: {
        type: String,
        enum: ['file', 'text', 'select', 'multiselect', 'cases'],
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    },
    score: {
        type: Number
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    select_option: {
        type: String
    },
    multi_options: [{
        type: String
    }],
    case: {
        type: String
    }
});

var uniqueValidator = require('mongoose-unique-validator');
MissionSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// MissionSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
MissionSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = MissionSchema;
module.exports = mongoose.model('Mission', MissionSchema); // Mission collection
