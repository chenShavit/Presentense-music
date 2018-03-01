'use strict';

var userController = require('./userController');
var mongoose = require('mongoose'),
    Group = mongoose.model('Group');

exports.get_users_groups = function (req, res, cb) {
    Group.find({ users: req.params.user_id }).populate('users').exec(function (err, groups) {
        if (err)
            return cb(Error(err));
        if (!groups)
            return cb(Error('No groups found'));

        res.json(groups);
    });
}

exports.get_group = function (req, res, cb) {
    var group_id = req.query.group_id;
    var contest_id = req.query.contest_id;
    if (group_id.length) {
        Group.findOne({ name: group_id, contest: contest_id }).populate('contest').populate({ path: 'users', model: 'User' }).exec(function (err, group) {
            if (err)
                return cb(Error(err));
            if (!group)
                return cb(Error('לא נמצאה קבוצה באתגר זה'))

            res.json(group);
        })
    }
    else {
        return cb(Error('לא נמצאה קבוצה באתגר זה'))
    }
}

exports.createGroup = function (req, res, next) {
    var user = req.body.user
    if (!user.viralLink)// Create viralLink if it isn't exists
        user.viralLink = '?viralLink=' + user._id
    Group.create({ name: user._id, users: [user._id], contest: req.body.contest._id, admin: user._id }, function (err, group) {
        if (err) {
            return next(err);
        }
        req.body.user = user;
        userController.update_user(req, res, function (err, cbUser) {
            if (err) {
                return next(err);
            }
            res.json(cbUser);
        })
    });
}

exports.joinGroup = function (req, res, next) {
    var user = req.body.user;
    Group.findOneAndUpdate({ name: user.viralLink, contest: req.body.contest._id }, { $push: { users: user._id } }, function (err, group) {
        if (err)
            return next(err)
        if (!group)
            return next('לא נמצאה קבוצה באתגר זה');
    });
}

exports.leaveGroup = function (req, res, next) {
    var user = req.params.user_id;
    Group.findByIdAndUpdate(req.params.group_id, { $pull: { users: user } },{new:true}, function (err, group) {
        if (err) {
            return next(err)
        }
        if (!group) {
            return next('לא נמצאה קבוצה באתגר זה');
        }

        res.send({});

    });
}