'use strict';
var mongoose = require('mongoose');


var Schema = mongoose.Schema,
    ObjectID = Schema.ObjectId,
    Mixed = Schema.Types.Mixed;

var MissionProgressSchema = new Schema({

    answered: {
        type: Mixed
    },
    user: {
        type: ObjectID,
        ref: 'User'
    },
    earnedPoints:{
        type:Number
    }
});



// delete some field from json
MissionProgressSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.__v;
        return ret;
    }
});

exports.schema = MissionProgressSchema;
module.exports = mongoose.model('MissionProgress', MissionProgressSchema, 'missions_progress'); // MissionProgress collection
