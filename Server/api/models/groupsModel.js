'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var GroupSchema = new Schema({

    name: {
        type: ObjectId,
        ref: 'User'
    },
    //TODO: override current stage of user by group's stage.
    //TODO: create bit.ly link on creation.
    users: [{
        type: ObjectId,
        ref: 'User'
    }],
    admin : {
        type: ObjectId,
        ref: 'User'
    },
    contest: {
        type: ObjectId,
        ref: 'Contest',
        required: 'question is required'
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        default: ['active']
    },
}, { timestamps: true });

var uniqueValidator = require('mongoose-unique-validator');
GroupSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// GroupSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
GroupSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Group', GroupSchema); // Group collection
