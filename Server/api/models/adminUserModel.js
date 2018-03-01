'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var AdminUserSchema = new Schema({

      name: {
            type: String,
            Required: 'name is required'
      },
      type: {
            type: String,
            enum: ['translator', 'tester', 'administrator']
      },
      email: {
            type: mongoose.SchemaTypes.Email,
            Required: 'email is required'
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
      category: {
            type: ObjectId,
            ref: 'Category'
      }
}, {timestamps: true});

var uniqueValidator = require('mongoose-unique-validator');
AdminUserSchema.plugin(uniqueValidator,  { message: 'Error, expected {PATH} to be unique.' });

// AdminUserSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
AdminUserSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.password;
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Admin_User', AdminUserSchema); // User collection
