'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Stage = require('./stageModel');

var Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var ContestSchema = new Schema({

      name: {
            type: String,
            Required: 'name is required'
      },
      category: {
            type: ObjectId,
            ref: 'Category'
      },
      stages: [{
            type: ObjectId,
            ref: 'Stage'
      }],
      color: {
            type: String//Should I remove? 
      },
      logo: {
            type: mongoose.SchemaTypes.Url//Can be local image?
      },
      url_path: {
            type: String
      },
      status: {
            type: String,
            enum: ['active', 'deleted'],
            default: ['active']
      },
      from: {
            type: Date
      },
      index: {
            type: Number
      },
      to: {
            type: Date
      },
      published: {
            type: Boolean
      }
}, {
      timestamps: true
});

var uniqueValidator = require('mongoose-unique-validator');
ContestSchema.plugin(uniqueValidator,  { message: 'Error, expected {PATH} to be unique.' });

// ContestSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
ContestSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = ContestSchema;
module.exports = mongoose.model('Contest', ContestSchema); // Contest collection
