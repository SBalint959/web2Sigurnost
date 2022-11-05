const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const db = require('../db');


router.get('/', async function (req, res, next) {
    const sqlPodaciA = `SELECT * FROM GroupA`;
    try {
        const resultPodaciA = (await db.query(sqlPodaciA, [])).rows;
        const rawPodaciA = JSON.stringify(resultPodaciA);
        const jsonPodaciA = JSON.parse(rawPodaciA);


        res.render('sqlInjection', {
            title: 'SQL Injection',
            podaciA: jsonPodaciA,
        });
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/podaci', async function (req, res, next) {
    const {id} = req.body;
    try {
        const query = `SELECT username, email FROM Users WHERE userid = ${id}`;
        const result = (await db.query(query, [])).rows;
        res.status(200)
        return res.json(result)
    } catch(err) {
        console.log(err)
    }
})
module.exports = router;