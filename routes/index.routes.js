const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const db = require('../db');
const app = express();
const fs = require('fs');
const { Parser } = require('json2csv');


const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'OiFYeQ5aWqu6JcCw8emrky0KUZiHe5umRFba4nueblszsSQqhqhue_5iL6Z8YWW_',
  baseURL: 'https://web2lab2sigurnost.onrender.com',
  clientID: 'np27BTsQ543kAdKVJC88ZBy5m8lEMG1Q',
  issuerBaseURL: 'https://dev-xxdzkni1.us.auth0.com'
};

router.use(auth(config));



router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Main page',
        data: req.oidc.user
    });
});

module.exports = router;