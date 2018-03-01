'use strict';

var mongoose = require('mongoose'),
    Session = mongoose.model('Session'),
    Contest = mongoose.model('Contest');

exports.get_all_sessions_for_contest = function (req, res, cb) {
    Contest.findById(req.body.contest_id).populate('category').exec(function (err, contest) {
        if (err)
            return cb(err);
        if (!contest)
            return cb(Error('No contest'));

        res.contest = contest;
        Session.find({ contest: req.body.contest_id }).populate('user').populate('stage').populate('contest').exec(function (err, sessions) {
            if (err)
                return cb(err);
            if (!sessions)
                return cb(Error('No Sessions'));

            res.sessions = sessions;
            return cb();
        });
    });
}

exports.get_session = function (req, res, cb) {
    Session.findById(req.body.session_id).populate('user').populate('stage').exec(function (err, session) {
        if (err)
            return cb(err);
        if (!session)
            return cb(Error('No Session'));

        res.session = session;
        return cb();
    })
}

exports.pass_stage = function (req, res, cb) {
    Session.update({ "_id": req.body._id }, { result: 'passed' }, function (err, session) {
        return cb();
    });
}

exports.fail_stage = function (req, res, cb) {
    Session.update({ "_id": req.body._id }, { result: 'failed' }, function (err, session) {
        return cb();
    });
}