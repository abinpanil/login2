var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let users=[{
    name:"Abin",
    username:"abin",
    password:"12345"
  },
  {
    name:"Abin",
    username:"abin",
    password:"12345"
  },
  {
    name:"Abin",
    username:"abin",
    password:"12345"
  },
  {
    name:"Abin",
    username:"abin",
    password:"12345"
  }]
  
  res.render('admin/view-users', { admin:true, users });
});

module.exports = router;
