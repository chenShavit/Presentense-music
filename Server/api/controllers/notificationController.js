'use strict';

var mongoose = require('mongoose'),
  Notification = mongoose.model('Notification');

exports.get_users_contest_notifications = function (req, res, next) {
  Notification.find({ user: req.query.user_id, contest: req.query.contest_id }, function (err, notifications) {
    if (err)
      return next(err);
    if (!notifications)
      return next(Error('No notifications exists for user'));

    res.json(notifications);
    // return next();
  });
}

/**
 * Adds notification to user's notifcations list.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.add_notification_to_user = function (req, res, next) {
  // contest_id, user_id, text
  var notification = new Notification(req.body);
  

  notification.save(function (err, notification) {
    if (err)
      return next(err);
    return next();
  });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.send_notification_email = function (req, res, next) {  
  var user = req.body.user;

  var contest_index;
  if (req.body.contest) {
    contest_index = req.body.contest.index;
  }
  
  //Emailing..
  var emailHelper = require('../../api/general/emailHelper.js');
  var htmlName = '';// This should change by contest.
  var body = '&lt;שם משתמש&gt;, יש לך התראה חדשה באתגר האופנה<br><br> הכנס לפה(קישור לאתגר הרלוונטי) והתעדכן';
  var subject = '';
  var title = '';

  switch (req.body.email_type) {
    case 'register':
      subject = 'ברוך הבא לאתגרים';
      body = 'נרשמת בהצלחה למערכת האתגרים';
      title = 'זו בדיקה של כותרת';
      htmlName = 'Generic_Email_Response.html';      
      break;
    case 'passed':
      subject = 'כל הכבוד! עברת שלב';
      body = 'עברת בהצלחה את שלב: '  /* TODO: add stage details??*/;
      htmlName = 'Generic_Email_Response.html';            
      break;
      //
    case 'failed':
      subject = 'לא נורא, נכשלת בשלב';// TODO: change copy
      body = 'נכשלת בשלב :'  ;// TODO: change copy
      htmlName = 'Generic_Email_Response.html';            
      break;
    case 'stage_available':
      subject = 'מחכה לך שלב חדש';// TODO: change copy
      body = 'עברת בהצלחה את שלב: ' + req.body;// TODO: change copy
      htmlName = 'Generic_Email_Response.html';            
      break;
    case 'finished_contest':
      subject = 'כל הכבוד! סיימת את התחרות';// TODO: change copy
      body = 'עברת בהצלחה את שלב: ' + req.body;// TODO: change copy
      htmlName = 'Generic_Email_Response.html';            
      break;
    case 'won_contest':
      subject = 'כל הכבוד!! אתה המנצח';// TODO: change copy
      body = 'עברת בהצלחה את כל השלבים: ' + req.body;// TODO: change copy
      htmlName = 'Generic_Email_Response.html';      
      break;
    case 'friend_joined':
      subject = 'חבר שהזמנת הצטרף לקבוצה';// TODO: change copy
      body = 'חבר שהזמנת נכנס לקבוצה, כנס עכשיו ותתחרו ביחד: ' + req.body;// TODO: change copy
      htmlName = 'Generic_Email_Response.html';      
      break;
    case 'restored_password':
      subject = 'ביקשת לאפס את הסיסמא!';
      body =   JSON.stringify(req.body.password) + 'הסיסמא שלך היא: ' + JSON.stringify(req.body.email) + 'שלום';
      htmlName = 'Generic_Email_Response.html';   
      break;
    case 'reached_last_stage':
      subject = 'יש עוד משימה אחת! כל הכבוד על ההתקדמות!';
      body = 'יש עוד משימה אחת!';
      htmlName = 'Generic_Email_Response.html';   
  }

  emailHelper.sendEmail('oren@moveo.co.il', subject, htmlName, function (error, body) {
    if (!error) {
      return next();
    }
    else {
      return next(error);
      // general mailgun error
    }
  }, { mail_text_body: body, mail_title: title});

}

exports.sendContactUsForm = function (req, res, next) {  
  
  //Emailing..
  var emailHelper = require('../../api/general/emailHelper.js');
  var htmlName = 'contactUs.html';
  var subject = 'צור קשר - הודעה חדשה';

  var emailBody = 'שם מלא: '+ req.body.name + '<br>' +
      'כתובת מייל: '+ req.body.email + '<br>' +
      'מספר טלפון: '+ req.body.phone + '<br>' +
      'הודעה: '+ req.body.message ;

  emailHelper.sendEmail('mayagril@presentense.org', subject, htmlName, function (error, body) {
    
    if (!error) {
      return next();
    }
    else {
      return next(error);
      // general mailgun error
    }
  }, { mail_text_body: emailBody});

}