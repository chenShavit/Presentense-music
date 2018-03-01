'use strict';

var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController');
var usersController = require('../controllers/usersController');
var contestController = require('../controllers/contestController');
var adminUserController = require('../controllers/adminUserController');
var categoriesController = require('../controllers/categoriesController');
var pisaController = require('../controllers/pisaController');
var answerController = require('../controllers/answerController');
var groupsController = require('../controllers/groupsController');
var services = require('../Services/services');
var url = require('url');



/*--- Block Access ---*/
router.all('*', function (req, res, next) {


  var cookies = services.parseCookies(req)
  var username = cookies.username;

  if (username) {
    req.body.adminID = username;
    adminUserController.verify_admin(req, res, function (err) {
      if (!err && res.adminUser) {
        if (req.originalUrl == '/admin/login')
          res.redirect("/admin/dashboard");
        else
          next();
      }
      else {
        res.clearCookie('username');
        res.redirect('/admin/login');
      }
    });
  }
  else {
    if (req.originalUrl != '/admin/login')
      res.redirect('/admin/login')
    else
      next();
  }
});

/*--- Login ---*/
router.route('/login').get(function (req, res) {
  if (req._parsedUrl.query == 'signout')
    res.clearCookie('username');
  res.render('admin/pages/login.ejs');
}).post(function (req, res) {
  adminUserController.verify_admin_login(req, res, function (err) {
    if (!err) {
      if (res.adminUser) {
        res.cookie('username', res.adminUser.id);
        res.send({ redirect: '/admin/dashboard' })
      }
    }
    else
      res.send({ error: err })
  });
});

/*--- Dashboard ---*/
router.get('/dashboard', function (req, res) {
  usersController.get_all_users(req, res, function () {
    contestController.get_all_contests(req, res, function () {
      pisaController.get_all_questions(req, res, function () {
        res.render('admin/pages/dashboard.ejs', {
          services: services,
          contests: res.contests,
          users: res.users,
          pisaQuestions: res.pisaQuestions,
          adminUser: res.adminUser
        });
      });
    });
  });
});

/*--- Users ---*/
router.get('/users', function (req, res) {
  usersController.get_all_users(req, res, function () {
    // contestController.get_users_contests(req, res, function () {
    contestController.get_all_contests(req, res, function () {
      groupsController.get_users_groups(req, res, function () {
        res.render('admin/pages/users.ejs', {
          services: services,
          users: res.users,
          // usersContests: res.usersContests,
          usersGroups: res.usersGroups,
          contests: res.contests,
          adminUser: res.adminUser
          // });
        });
      });
    });
  });
});

router.route('/deleteUser')
  .post(usersController.deleteUser, function (req, res) {
    res.redirect("/admin/users");
  });

router.get('/userDetails', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer.substr(referer.lastIndexOf('/'), referer.length);
  req.body.userId = req._parsedUrl.query;
  usersController.get_user(req, res, function () {
    res.render('admin/pages/userDetails.ejs', {
      user: res.user || {},
      origin: origin,
      adminUser: res.adminUser
    });
  });
});

/*--- Contests ---*/
router.get('/contests', function (req, res) {
  var parts = url.parse(req.url, true);
  var filterBy = parts.query.filterBy;
  contestController.get_all_contests(req, res, function () {
    usersController.get_all_users(req, res, function () {
      res.render('admin/pages/contests.ejs', {
        users: res.users,
        services: services,
        contests: res.contests,
        adminUser: res.adminUser
      });
    });
  });
});



//Contest Publish
router.post("/contestPublished", function (req, res) {
  contestController.publish_contest(req, res, function () {
    res.send({ redirect: '/admin/contests' });
  });
});

/*--- Contest ---*/
router.get('/contest', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  req.body.contest_id = req._parsedUrl.query;
  contestController.get_contest(req, res, function () {
    res.render('admin/pages/contest.ejs', {
      services: services,
      contest: res.contest || { stages: [] },
      origin: origin,
      adminUser: res.adminUser
    });
  });
});

router.route('/updateStagesIndex')
  .post(contestController.updateStagesIndex, function (req, res) {
    res.send({ redirect: '/admin/contest?' + req.body.contest_id });
  });
/*

/*--- Answers ---*/
router.get('/answers', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  req.body.contest_id = req._parsedUrl.query;
  answerController.get_all_sessions_for_contest(req, res, function () {
    res.render('admin/pages/answers.ejs', {
      contest: res.contest,
      services: services,
      answers: res.sessions,
      origin: origin,
      adminUser: res.adminUser
    });
  });
});

/*--- Answer ---*/
router.get('/answer', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  req.body.session_id = req._parsedUrl.query;
  answerController.get_session(req, res, function () {
      pisaController.get_pisa_by_id(req, res, res.session.pisaID, function () {
        res.render('admin/pages/answer.ejs', {
          answer: res.session || {},
          origin: origin,
          adminUser: res.adminUser,
          pisaQuestion: res.pisaQuestion || {}
        });
    });
  });
});

router.route('/passStage')
  .post(answerController.pass_stage, function (req, res) {
    res.redirect(req.get('referer'));
  });

router.route('/failStage')
  .post(answerController.fail_stage, function (req, res) {
    res.redirect(req.get('referer'));
  });

/*--- Stage ---*/
router.get('/stage', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  var parts = url.parse(req.url, true);
  var contest = parts.query.contest;
  req.body.stage_id = parts.query.stage;
  contestController.get_stage(req, res, function () {
    res.render('admin/pages/stage.ejs', {
      stage: res.stage || {},
      contest: contest,
      origin: origin,
      adminUser: res.adminUser
    });
  });
});

// Update Stage
router.post('/updateStage', function (req, res) {
  contestController.update_stage(req, res, function (err) {
    if (!err)
      res.send({ redirect: '/admin/contests' })
    else
      res.send({ error: err })
  });
});

router.route('/deleteStage')
  .post(contestController.deleteStage, function (req, res) {
    res.redirect("/admin/contests");
  });



/*--- Admin users ---*/
router.get('/adminUsers', function (req, res) {
  adminUserController.get_all_admin_users(req, res, function () {
    res.render('admin/pages/adminUsers.ejs', {
      adminUsers: res.adminUsers,
      services: services,
      adminUser: res.adminUser
    });
  });
});

/*--- Admin user details ---*/
router.get('/adminUserDetails', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  req.body.userId = req._parsedUrl.query;
  adminUserController.get_admin_user(req, res, function () {
    categoriesController.get_all_categories(req, res, function () {
      res.render('admin/pages/adminUserDetails.ejs', {
        user: res.user || { category: {} },
        origin: origin,
        categories: res.categories,
        adminUser: res.adminUser
      });
    });
  });
});

// /*--- Change admin password ---*/
// router.get('/admin/changeAdminPassword', function (req, res) {
//   res.render('admin/pages/changePassword.ejs');
// }).post('/admin/changeAdminPassword', function (req, res) {
//   adminUserController.change_admin_password(req, res, function () {
//     res.render('admin/pages/dashborad.ejs');
//   });
// });

router.post('/updateAdminUser', function (req, res) {
  adminUserController.update_admin_user(req, res, function () {
    res.redirect("/admin/adminUsers");
  });
});

//Delete admin user
router.route('/deleteAdminUser')
  .post(adminUserController.deleteAdminUser, function (req, res) {
    res.redirect("/admin/adminUsers");
  });

/*--- Translations ---*/
router.get('/translations', function (req, res) {
  var referer = req.headers.referer;
  var origin = referer ? referer.substr(referer.lastIndexOf('/'), referer.length) : '/dashboard';
  req.body.contest_id = req._parsedUrl.query;
  dashboardController.get_all_questions_for_contest(req, res, function () {
    res.render('admin/pages/translations.ejs', {
      adminUser: res.adminUser,
      origin: origin,
      contest: res.contest_questions
    });
  });
});

router.route('/updateTranslations')
  .post(dashboardController.updateTranslations, function (req, res) {
    res.redirect("/admin/contests");
  });


module.exports = router;