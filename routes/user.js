var express = require('express');
var router = express.Router();
var userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { admin:false });
});
router.get('/signin',(req,res)=>{
  res.render('signin')
})
router.get('/signup',(req,res)=>{
  res.render('signup')
})
router.post('/signup',(req,res)=>{
  let values = req.body
 
  userHelpers.adduser(req.body).then((respose)=>{
   
    res.redirect('/signin')
  }).catch((err)=>{
    console.log(err)
  })
  
})

router.post('/home',(req,res)=>{

 
  res.redirect('/')
})




module.exports = router;
