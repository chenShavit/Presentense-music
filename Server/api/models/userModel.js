'use strict';
var mongoose = require('mongoose'),
      Contest = mongoose.model('Contest');

require('mongoose-type-email');
require('mongoose-type-url');
require('async');

var Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var UserSchema = new Schema({

      name: {
            type: String,
            Required: 'name is required'
      },
      age: {
            type: String
      },
      phone: {
            type: String,
            Required: 'phone is required'
      },
      email: {
            type: mongoose.SchemaTypes.Email,
            Required: 'email is required'
      },
      viralLink: {
            type: String
      },
      gender: {
            type: String,
            enum: ['male', 'female']
      },
      password: {
            type: String,
            Required: 'password is required'
      },
      status: {
            type: String,
            enum: ['active', 'deleted'],
            default: ['active']
      },
      birthday: {
            type: Date
      },
      city: {
            type: String
      },
      contest_stages: [{
            contest_index: Number,
            stage: Number,
            onPisa:Boolean
      }],
      seen_pisas:[ObjectId]
}, { timestamps: true });

var uniqueValidator = require('mongoose-unique-validator');
UserSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// UserSchema.pre('validate', function(next) {
//     next();
// });

// UserSchema.pre('remove', function (next) {
//       Group.find({ users: this._id }, function (err, groups) {
//             async.forEach(groups, function (group) {
//                   Group.findByIdAndUpdate(group.id, { $pull: { users: this._id } })
//             }, function (err) {
//                   Contest.find({ participants: this._id }, function (err, contests) {
//                         async.forEach(contests, function (contest) {
//                               Contest.findByIdAndUpdate(contest.id, { $pull: { participants: this._id } })
//                         }, function (err) {
//                               this.findByIdAndUpdate(this._id, {status: 'deleted'}, function(err) {
//                                     next();
//                               })
//                         });
//                   });
//             });
//       });
// });

// delete some field from json
UserSchema.set('toJSON', {
      transform: function (doc, ret, options) {
            delete ret.password;
            delete ret.status;
            delete ret.__v;
            return ret;
      }
});

module.exports = mongoose.model('User', UserSchema); // User collection
