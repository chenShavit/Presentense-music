'use strict';
var mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

var Schema = mongoose.Schema,
      ObjectID = mongoose.ObjectID;

var StageSchema = new Schema({
      name: {
            type: String
            
      },
      stage_details: {
            type: String,
            required: 'stage information is required'
      },
      stage_details_arabic: {
            type: String
      },
      hover_text: {
            type: String
      },
      question_type: {
            type: String,
            enum: ['missions', 'video', 'free_text', 'cases', 'file', 'multiselect', 'select'],
      },
      image: {
            type: mongoose.SchemaTypes.Url
      },
      index: {
            type: Number
      },
      status: {
            type: String,
            enum: ['active', 'deleted'],
            default: ['active']
      },
      from: {
            type: Date
      },
      to: {
            type: Date
      },
      max_participants: {
            type: Number
      },
      max_winners: {
            type: Number
      },
      continue_when: {
            type: String,
            enum: ['any', 'correct', 'date', 'correct-date']
      },
      pass_level_code: {
            type: String
      },
      // Relevant only for type Mission/Phases
      pass_level_score: {
            type: Number
      },
      /*** Add Pisa Questions ***/
      pisa_required: {
            type: Boolean
      },
      pisa_questions_difficulty: [{
            type: String,
            enum: ['easy', 'medium', 'hard']
      }],
      /*** FreeText ***/
      /*** Location (Multi-free-text-options) ***/
      /*** Missions ***/
      /*** Phases ***/
      /*** File Upload ***/
      /*** Video Question ***/
      /*** Multi Choice ***/
      /*** Single Choice ***/


      //Here starts question Model:
      question_text: {
            type: String,
            Required: 'question is required'
      },
      question_text_arabic: {
            type: String
      },
      answer_type: {
            type: String,
            enum: ['file', 'text', 'select', 'multiselect', 'cases'],
      },
      select: [{
            type: String
      }],
      select_arabic: [{
            type: String
      }],
      correct_answer: [{
            type: String
      }],
      multi_options: [{
            type: String
      }],
      multi_options_arabic: [{
            type: String
      }],
      cases: [{
            type: String
      }],
      // Video Questions:
      video_url: {
            type: mongoose.SchemaTypes.Url            
      },
      times_to_watch: {
            type: Number
      },
      video_question: [{
            video_type: {
                  type: String
            },
            question_text: {
                  type: String,
                  Required: 'question is required'
            },
            question_text_arabic: {
                  type: String
            },
            select: [{
                  type: String
            }],
            correct_answer: [{
                  type: String
            }],
            multi_options: [{
                  type: String
            }],
      }]
}, {
            timestamps: true
      });

var uniqueValidator = require('mongoose-unique-validator');
StageSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

// StageSchema.pre('validate', function(next) {
//     next();
// });


// delete some field from json
StageSchema.set('toJSON', {
      transform: function (doc, ret, options) {
            delete ret.status;
            delete ret.__v;
            return ret;
      }
});

exports.schema = StageSchema;
module.exports = mongoose.model('Stage', StageSchema); // Stage collection
