'use strict';
module.exports = function (app) {
  var PisaController = require('../../api/controllers/PisaController');

  /**
  * Get the pisa object
  * query params : 
  * category : the category id of the pisa
  * level: the level of the pisa requested
  * language: he/ar
  */
  app.route('/api/pisa/get')
    .get(PisaController.getRandomPisaQuestion);


  app.route('/api/pisa/save')
    .post(PisaController.createPisaQuestion);

  app.route('/api/pisa/list')
    .get(PisaController.listPisaQuestions);

  app.route('/api/pisa/check/:question_id')
    .post(PisaController.checkAnswers);


  app.route('/api/pisa/:question_id')
    .get(PisaController.getQuestionById);



};
