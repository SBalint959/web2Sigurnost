const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async function (req, res, next) {
    const sqlPodaciA = `SELECT * FROM GroupA`;
    const sqlPodaciB = `SELECT * FROM GroupB`;
    try {
        const resultPodaciA = (await db.query(sqlPodaciA, [])).rows;
        const rawPodaciA = JSON.stringify(resultPodaciA)
        const jsonPodaciA = JSON.parse(rawPodaciA);
        const resultPodaciB = (await db.query(sqlPodaciB, [])).rows;
        const rawPodaciB = JSON.stringify(resultPodaciB)
        const jsonPodaciB = JSON.parse(rawPodaciB);


        res.render('sqlInjection', {
            title: 'SQL Injection',
            podaciA: jsonPodaciA,
            podaciB: jsonPodaciB
        });
    } catch (err) {
        console.log(err);
    }
    
});
module.exports = router;