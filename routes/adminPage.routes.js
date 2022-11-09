const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/', async function (req, res, next) {
   if(1===1) {
      if(req.oidc.user === undefined){
         res.send("Access denied. You are not logged in!")
      }
      else if (req.oidc.user.email === "naprwebadmin123@nrppw.hr"){
         res.render('adminPage', {
            title: "Secret admin page",
            data: req.oidc.user
         });
      }
      else {
         res.send("Access denied. This is admin page")
      }
   }
   else {
      if (req.query.user === "admin") {
         res.render('adminPage', {
            title: "Secret admin page",
            data: req.oidc.user
         });
      }
      else {
         res.send("Access denied. This is admin page!")
      }
   }
});
module.exports = router;