'use strict';

var mongoose = require('mongoose'),
  AdminUser = mongoose.model('Admin_User');

exports.verify_admin = function (req, res, cb) {
  AdminUser.findById(req.body.adminID).populate('category').exec(function (err, result) {
    if (err)
      return cb(Error(err));
    if (!result)
      return cb(Error('No admin found'));

    res.adminUser = result;
    return cb();
  });
}

exports.verify_admin_login = function (req, res, cb) {
  AdminUser.find({ name: req.body.user_name, password: req.body.password }, function (err, result) {
    if (err)
      return cb(err);
    if (result.length == 0) {
      return cb('שם המשתמש ו/או הסיסמא שגויים');
    }
    res.adminUser = result[0];
    return cb();
  });
}

exports.get_all_admin_users = function (req, res, next) {
  AdminUser.find({ status: 'active' }).populate('category').exec(function (err, users) {
    if (err)
      return next(err);
    if (!users)
      return next(Error('users does not exist'));

    res.adminUsers = users;
    return next();
  });
}

exports.get_admin_user = function (req, res, cb) {
  AdminUser.findOne({ '_id': req.body.userId, status: 'active' }).populate('category').exec(function (err, user) {
    if (err)
      return cb(err);
    if (!user)
      return cb(Error('משתמש לא נמצא במערכת'));

    res.user = user;
    return cb()
  });
}

exports.update_admin_user = function (req, res, next) {
  var user = new AdminUser(req.body);
  if (req.body.id) {
    AdminUser.findByIdAndUpdate(user.id, user, function (err, result) {
      if (err)
        return next(Error(err))
      else if (!result)
        return next(Error('נכשל עדכון המשתמש'));

      return next();
    });
  }
  else {
    AdminUser.create(user, function (err, result) {
      if (err)
        return next(Error(err))
      else if (!result)
        return next(Error('נכשלה יצירת המשתמש'));

      //Email
      var emailHelper = require('../../api/general/emailHelper.js');
      var htmlName = 'new-admin-with-password.html';
      var subject = result.name + ', ברוך הבא למערכת ניהול אתגרים';
      var pass = result.password;

      emailHelper.sendEmail(result.email, subject, htmlName, function (error, body) { // TODO change on production
        if (!error) {
        }
        else {
          // general mailgun error
        }
      }, { temp_password: pass, user_name: result.name });

      return next();
    });
  }
}

exports.change_admin_password = function (req, res, next) {
  AdminUser.findOne({ id: req.body.adminID, password: req.body.password }, function (err, user) {
    if (err) // general error
      return next(err);
    else if (!user) //checks that the user exists
    {
      return next(Error('נראה שהזנת סיסמא לא נכונה'))
    }

    if (req.body.new_password != req.body.confirm_password)
      return next(Error('הסיסמאות אינן זהות'));
    else {
      AdminUser.findByIdAndUpdate(req.body._id, { password: req.body.new_password }, function (err, user) {
        if (err)
          return (next(Error(err)));
        else if (!user)
          return (next(Error('לא נמצא משתמש')));

        res.adminUser = user;
        return next();
      });
    }
  });
}

exports.deleteAdminUser = function (req, res, next) {
  AdminUser.update({ "_id": req.body._id }, { "status": "deleted" }, function (err, updatedUser) {
    if (err)
      return next(err);
    if (!updatedUser)
      return next(Error('משתמש לא נמצא במערכת'));
    next()
  });
}

Array.prototype.contains = function (element) {
  return this.indexOf(element) > -1;
};

function generatePassword() {
  var length = 10,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
