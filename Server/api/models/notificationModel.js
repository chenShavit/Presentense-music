'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var NotificationSchema = new Schema({

    contest: {
        type: ObjectId,
        ref: 'Contest',
        required: 'contest is required'
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: 'User ID is required'
    },
    text: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    }
}, { timestamps: true });

var uniqueValidator = require('mongoose-unique-validator');
NotificationSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// NotificationSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
NotificationSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = NotificationSchema;
module.exports = mongoose.model('Notification', NotificationSchema); // Notification collection
