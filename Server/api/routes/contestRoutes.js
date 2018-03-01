'use strict';
module.exports = function (app) {
  var contestController = require('../../api/controllers/contestController');
  var notificationController = require('../../api/controllers/notificationController');

  app.route('/api/contests')
    .get(contestController.get_all_contests);

  // app.route('/api/contest/:contest_id')
  //   .get(contestController.get_contest);

  app.route('/api/contest/:contest_index')
    .get(contestController.get_contest_by_index);

  app.route('/api/stage/:stage_id')
    .get(contestController.get_stage);

  app.route('/api/stage/answer')
    .post(contestController.answer_stage);

  app.route('/api/usersContests/:user_id')
    .get(contestController.get_users_contests);

  app.route('/api/joinContest')
    .post(contestController.joinContest);

  app.route('/api/contestUserNotifications')
    .get(notificationController.get_users_contest_notifications);


  app.route('/api/contest/:user_id/mission')
    .post(contestController.saveMissionProgress)
    .get(contestController.getMissionProgress);
};
