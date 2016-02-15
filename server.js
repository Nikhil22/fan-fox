var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 8000;

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.use(express.static(__dirname + '/public'));

htmlController(app, __dirname);
apiController(app, __dirname);

app.listen(port);
