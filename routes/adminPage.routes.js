const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/', async function (req, res, next) {
   if(req.oidc.user === undefined){
      res.send("Access denied. You are not logged in!")
   }
   else{
   res.render('adminPage', {
      title: "Profile - " + req.oidc.user.nickname,
      data: req.oidc.user
   });
  }
    
});
module.exports = router;