'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SessionSchema = new Schema({

    contest: {
        type: ObjectId,
        ref: 'Contest',
        required: 'question is required'
    },
    stage: {// TODO: handle case when admin changes the ref question..
        type: ObjectId,
        ref: 'Stage',
        required: 'question is required'
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: 'User ID is required'
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    },
    answers: [{
        type: String
    }],
    pisaID: {
        type: String
    },
    result: {
        type: String,
        enum: ['passed', 'failed', 'noResult'],
        default: ['noResult']
    },
    isPisa:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

var uniqueValidator = require('mongoose-unique-validator');
SessionSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// SessionSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
SessionSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = SessionSchema;
module.exports = mongoose.model('Session', SessionSchema); // Session collection
