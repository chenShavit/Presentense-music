//API
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  Contest = require('./api/models/contestModel'),
  User = require('./api/models/userModel'),
  Group = require('./api/models/groupsModel'),
  Stage = require('./api/models/stageModel'),
  Category = require('./api/models/categoryModel'),
  Question = require('./api/models/questionModel'),
  QuestionType = require('./api/models/questionTypeModel'),
  Pisa = require('./api/models/pisaModel'),
  Session = require('./api/models/sessionModel'),
  MissionProgress = require('./api/models/missionProgressModel'),
  Notification = require('./api/models/notificationModel'),
  bodyParser = require('body-parser'),
  path = require('path'),

  //ADMIN
  AdminUser = require('./api/models/adminUserModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PresentenseDB');  // connect to db

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('DB connection success!');
});

var cors = require('cors')
cors({ credentials: true, origin: true })
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/favicon.ico', function (req, res) {
  res.status(204);
});

app.use('/api', express.static(__dirname + '/apiweb'));
app.use('/', express.static(__dirname + '/dist'));

app.use(express.static(path.join(__dirname, 'public')));
var userRoutes = require('./api/routes/userRoutes');
var contestRoutes = require('./api/routes/contestRoutes');
var pisaRoutes = require('./api/routes/pisaRoutes');

var admin = require('./admin/routes/routes');

app.use('/admin/', admin);
// admin(app);
userRoutes(app);
contestRoutes(app);
pisaRoutes(app);
app.listen(port);

app.use(errorHandler);


// error handler
app.use(function (err, req, res, next) {

  if (err) {
    var status = 400;
    if (err.status) {
      status = err.status;
    }
    res.status(status).json({ error: err.message });
  }
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('Presentense RESTful API server started on: ' + port);
if (process.pid) {
  console.log('Presentense process id: ' + process.pid);
}

var awsinit = require('./api/AWS/awsS3Init.js');
awsinit.startInit();

function errorHandler(err, req, res, next) {
  if (err)
    res.status(400).send({ error: err.message })
}

function replaceErrors(key, value) {
  if (value instanceof Error) {
    var error = {};

    Object.getOwnPropertyNames(value).forEach(function (key) {
      error[key] = value[key];
    });

    return error;
  }

  return value;
}
