'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Group = mongoose.model('Group');
var async = require('async');

exports.get_all_groups = function (req, res, cb) {
    Group.find({}, function (err, groups) {
        if (err)
            return cb(Error(err));
        if (!groups)
            return cb(Error('No groups found'));

        res.groups = groups;
        return cb();
    });
}

exports.get_users_groups = function (req, res, next) {
    res.usersGroups = new Map();
    User.find({ status: 'active' }, function (err, users) {
      if (!err && users) {
        async.each(users, function (element, cb) {
          Group.find({ participants: element.id }, function (err, groups) {
            if (err)
              return cb(err);
            if (!groups)
              return cb(Error('User\'s groups not found'));
            
              res.usersGroups.set(element.id, groups);
            return cb();
          });
        }, function(err) {
          if (!err)
          return next();
        });
      }
      else
        return next(Error('No users'));
    });
}
