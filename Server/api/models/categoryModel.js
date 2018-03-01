'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({

      name: {
            type: String,
            Required: 'name is required'
      },
      status: {
            type: String,
            enum: ['active', 'deleted'],
            default: ['active']
      }
});

// delete some field from json
CategorySchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.status;
        delete ret.__v;
        return ret;
    }
});

exports.schema = CategorySchema;
module.exports = mongoose.model('Category', CategorySchema); // Categories collection
