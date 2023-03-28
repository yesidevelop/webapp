var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'C2E' });
});

/* GET cms page. */
router.get('/cms', function(req, res1, next) {
  // var host = 'localhost';
  // var port = 3002;
  // var path = '/cms';

  var host = 'cms';
  var port = 80;
  var path = '/cms';

  var options = {
    host: host,
    port: port,
    path: path
  };
  
  var body = '';
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res1.render('cms', { data: JSON.parse(body) });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET authoring page. */
router.get('/authoring', function(req, res1, next) {

  // var host = 'localhost';
  // var port = 3003;
  // var path = '/users';

  var host = 'authoring';
  var port = 80;
  var path = '/users';


  var options = {
    host: host,
    port: port,
    path: path
  };
  var body = '';
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res1.render('authoring', { data: JSON.parse(body) });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET cms page. */
router.get('/authoring/users', function(req, res1, next) {
  // var host = 'localhost';
  // var port = 3003;
  // var path = '/users';

  var host = 'authoring';
  var port = 80;
  var path = '/users';

  var options = {
    host: host,
    port: port,
    path: path
  };
  
  var body = '';
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res1.render('users', { title: body });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

/* GET media page. */
router.get('/media', function(req, res1, next) {
  // var host = 'localhost';
  // var port = 3001;
  // var path = '/media';

  var host = 'media';
  var port = 80;
  var path = '/media';

  var options = {
    host: host,
    port: port,
    path: path
  };
  console.log(options);
  var body = '';
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      res1.render('media', { data: JSON.parse(body) });
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  
  
});

module.exports = router;


