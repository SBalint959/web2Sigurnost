const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/', async function (req, res, next) {

   if (req.query.user === "admin") {
      res.render('adminPage', {
         title: "Secret admin page",
         data: req.oidc.user
      });
   }
   else {
      res.send("Access denied. This is admin page!")
   }
});
module.exports = router;