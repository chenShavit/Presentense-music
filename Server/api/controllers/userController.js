'use strict';

var notificationController = require('./notificationController');
var groupsController = require('./groupsController');
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Group = mongoose.model('Group');

exports.user_email_exists = function (req, res, cb) {
    User.find({ email: req.body.user.email }, function (err, result) {
        if (!err) {
            res.doesUserEmailExists = (result.length ? true : false);
            return cb();
        }
        else
            return cb(Error('Failed to find user ', err));
    });
}

exports.get_user = function (req, res, cb) {
    User.findById(req.params.user_id, function (err, result) {
        if (!err) {
            res.json(result);
        }
        else
            return cb(Error('Failed to find user ', err));
    });
}

exports.register_a_user = function (req, res, next) {
    module.exports.user_email_exists(req, res, function (err) {
        if (err)
            return next(err)
        else
            if (res.doesUserEmailExists)
                return next(Error('User already exists'));

        var new_user = new User(req.body.user);
        if (!req.body.contest) {
            new_user.contest_stages = { contest_index: 1, stage: 1 }
        }else {
            new_user.contest_stages = { contest_index: req.body.contest.index, stage: 1 }
        }
        new_user.save(function (err, user) {
            if (err) {
                return next(err);
            }
            if (user) {
                if (user.viralLink && user.viralLink.indexOf('viralLink') == -1) {
                    req.body.user = user
                    groupsController.joinGroup(req, res/*cb*/);
                }
            }
            //Email about joining the contest
            req.body.email_type = 'register';
            req.body.user = user;
            // notificationController.send_notification_email(req, res, function (err, res) {
            //     if (err)
            //         console.error(err);
            // });
            res.json(user);
        });
    });
}

exports.loginFacebook = function (req, res, next) {
    if (req.body.user.email) {
        User.findOne({ 'email': req.body.user.email }, function (err, user) {
            if (err)
                return next(err);
            else if (!user) {
                return next(Error('משתמש לא נמצא במערכת'))
            }

            return res.json(user);
        });
    }
    else
        return next(Error('לא ניתנה כתובת מייל'));
}

exports.login = function (req, res, next) {
    //Add contest to this ^^^ request...
    //Here check if user already signed to this contest (using contest_stages),
    //If not add/push to contest_stages new row & show terms approve popup on the client.
    //(e.g: contest_index: 1(get index from real contest), stage: 1)
    if (req.body.email && req.body.password) {
        User.findOne({ 'status': { $ne: 'deleted' }, 'email': req.body.email, 'password': req.body.password }, function (err, user) {
            if (err)
                return next(Error(err));
            else if (!user) {
                return next(Error('הסיסמא או כתובת המייל שגויים'))
            }

            return res.json(user);
        });
    }
    else
        return next(Error('חלק מהשדות חסרים'));
};

exports.forgot_password = function (req, res, next) {
    var password = generatePassword();
    User.findOneAndUpdate({ 'email': req.body.email }, { 'password': password }, function (err, user) {
        if (err) // general error
            return next(err);
        else if (!user) //checks that the user exists
        {
            return next(Error('משתמש לא נמצא במערכת'))
        }
        req.body.password = user.password;
        // notificationController.send_notification_email(req, res, function(err, res){
        //     if(err){
        //         throw err;
        //     }
        // })
    });
    req.body.email_type = 'restored_password'

   
}

exports.change_password = function (req, res, next) {
    User.findOne({ _id: req.body._id, password: req.body.current_password }, function (err, user) {
        if (err) // general error
            return next(err);
        else if (!user) //checks that the user exists
        {
            return next(Error('הסיסמא אינה תואמת את הסיסמא במערכת'))
        }

        if (req.body.new_password != req.body.confirm_password)
            return next(Error('הסיסמאות אינן זהות'));
        else {
            User.findByIdAndUpdate(req.body._id, { password: req.body.new_password }, function (err, user) {
                if (err)
                    return next(Error(err));
                else if (user)
                    res.json(user);
                else
                    return next();
            });
        }
    });
}

exports.update_user = function (req, res, next) {
    var user = req.body.user;
    User.findByIdAndUpdate({ _id: req.body.user._id }, {
        $set: {
            name: user.name,
            phone: user.phone,
            viralLink: user.viralLink,
            gender: user.gender,
            status: user.status,
            birthday: user.birthday,
            city: user.city,
            contest_stages: user.contest_stages
        }
    }, { upsert: true }, function (err, user) {
            if (err)
                return next(Error(err));
            if (!user)
                return next(Error('לא נמצא משתמש'))
            else
                return next(undefined, user);
        });
}

exports.update_phone = function (req, res, next) {
    var phone = req.body.phone;
    if (phone=='0') next()

    User.findOneAndUpdate({ _id: req.body._id }, { phone: phone }, function (err, user) {
        if (err)
            return next(Error(err));
        if (!user)
            return next(Error('לא נמצא משתמש'));
        else
            res.json(user)
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
