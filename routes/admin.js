var express = require('express');
const { response } = require('../app');
var router = express.Router();
var db = require('../config/connection')
var collection = require('../config/collections')
var userHelpers = require('../helpers/user-helpers');
const collections = require('../config/collections');

 

/* GET users listing. */
router.get('/', function(req, res, next) {

  
 
  userHelpers.getAllUsers().then((users)=>{
    console.log(users)

    res.render('admin/view-users', { admin:true, users });
  })
  
  
});

router.post('/adduser',(req,res)=>{
  console.log(req.body);
  userHelpers.adduser(req.body).then((response)=>{
    res.redirect('/admin')
  }).catch((err)=>{
    console.log(err);
  })
})

router.post('/deleteuser',(req,res)=>{
  let userId=req.body.id
  userHelpers.deleteUser(userId).then((response)=>{
    console.log("Deleted")
    res.json({})
  }).catch((err)=>{
    console.log("Error")
  })
  
})

// router.post('/deleteuser', function (req, res) {
//   var id = req.body.id
//   console.log("DELETE");
//   console.log(id);
//   //console.log({_id: new mongo.ObjectId(id)}+"IDDDD......");
 

//     db.get().collection(collections.USERS_COLLECTION).deleteOne({ _id:objectId(id) }).then((response)=>{
//     console.log(response);
//     })
  

//   //res.json({ success: id })
// });
module.exports = router;
