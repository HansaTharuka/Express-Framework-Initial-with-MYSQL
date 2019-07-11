var express = require('express');
var router = express.Router();
// get the client
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

router.get('/', function(req, res, next) {
  connection.query(
    'SELECT * FROM `demo` WHERE `id`=1',
    function(err, results, fields) {
      console.log(JSON.stringify(results)); // results contains rows returned by server
      res.render('index', { title: 'Express' });
      //console.log(fields); // fields contains extra meta data about results, if available
    }
  );
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function (req, res) {
  res.send('Got a POST request')
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});

module.exports = router;
