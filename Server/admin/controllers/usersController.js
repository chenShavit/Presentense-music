'use strict';

var async = require('async');
var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.get_all_users = function (req, res, cb) {
  User.find({ status: 'active' }, function(err, users) {
    if (err)
      return cb(err);
    if (!users)
      return cb(Error('No users'));
      
    res.users = users;
    return cb();
  });
}

exports.get_latest_users = function (userType, req, res, cb) {

  async.forEach(['day', 'week', 'month'], function (latest, next) {
    var date = new Date();

    switch (latest) {
      case 'day':
        date.setDate(date.getDate() - 1);
        break;
      case 'week':
        date.setDate(date.getDate() - 7);
        break;
      case 'month':
        date.setMonth(date.getMonth() - 1);
        break;
    }

    User.find({ type: userType, status: { $ne: 'deleted' }, createdAt: { $gte: date } }, function (err, users) {
      if (err)
        return next(err);
      if (!users)
        return next(Error('No users'));

      res.latestUsers.set(latest + "-" + userType, users);

      return next();
    });
  }, function (err) {
    if (err)
      return cb(err);
    else
      return cb();
  });
}

exports.get_user = function (req, res, cb) {
  User.findById(req.body.userId, function(err, user) {
    if (err)
      return cb(err);
    if (!user)
      return cb(Error('משתמש לא נמצא במערכת'));

    res.user = user;
    return cb()
  });
}

exports.updateUser = function (req, res, next) {
  if (req.body._id) {
    User.findOneAndUpdate({ "_id": req.body._id }, req.body, function (err, updatedUser) {
      if (err)
        return next(err);
      if (!updatedUser)
        return next(Error('משתמש לא נמצא במערכת'));

      else
        return next();
    });
  }
  else {
    // apiUserController.register_a_user(req, res, function(){
    //   console.log('after register');
    //   next();
    // });
    var data = req.body;
    User.create({
      createdAt: new Date(),
      //
      name: data.name,
      // phone: data.phone,
      email: data.email,
      imageUrl: data.imageUrl,
      gender: data.gender,
      birthday: data.birthday,
      city: data.city,
      password: generatePassword(),
      createdAt: new Date(),
      type: data.type,
      status: data.status
    }, function (err, newUser) {
          return next();
    });
  }
}
              
exports.deleteUser = function (req, res, next) {
  User.update({ "_id": req.body._id }, { "status": "deleted" }, function (err, updatedUser) {
    if (err)
      return next(err);
    if (!updatedUser)
      return next(Error('משתמש לא נמצא במערכת'));
    next()
  });
}

function generatePassword() {
  var length = 10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}