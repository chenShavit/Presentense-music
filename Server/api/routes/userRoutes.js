'use strict';
module.exports = function (app) {
  var userController = require('../../api/controllers/userController');
  var groupsController = require('../../api/controllers/groupsController');
  var notificationController = require('../../api/controllers/notificationController');

  //users//
  app.route('/api/user')
    .post(userController.register_a_user);

  app.route('/api/user/login')
    .post(userController.login);

  app.route('/api/user/:user_id')
    .get(userController.get_user)

  app.route('/api/user/loginFacebook')
    .post(userController.loginFacebook);

  app.route('/api/user/forgot')
    .post(userController.forgot_password);

  app.route('/api/user/changePassword')
    .post(userController.change_password);
    
  app.route('/api/user/updatePhone')
    .post(userController.update_phone);

  app.route('/api/group')
  .get(groupsController.get_group);

  app.route('/api/createGroup')
  .post(groupsController.createGroup)

  app.route('/api/notification/sendContactUsForm')
  .post(notificationController.sendContactUsForm)
  
   app.route('/api/user/:user_id/group/:group_id')
  .delete(groupsController.leaveGroup)
  
   app.route('/api/user/:user_id/groups')
  .get(groupsController.get_users_groups)
};
