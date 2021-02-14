const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




//GET route to get finished title/ year for ListMovie
router.get('/', (req, res) => {

    const queryText = `
        SELECT "title", "year"
        FROM "media"
        WHERE "media_type_id" = 2 AND "status" = 'finished' AND "user_id" = $1
        ORDER BY "date" DESC;`;
    pool.query(queryText, [req.user.id])
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log('ERROR getting books', error);
            res.sendStatus(500);
        })
}); //end get for movies



//POST route to add a new media item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title", "year", "thoughts", "date", "status", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title, 
                                req.body.year, 
                                req.body.thoughts, 
                                req.body.date, 
                                req.body.status, 
                                req.body.user_id,
                               ])
        .then( result => {
            console.log('New Movie Entry:', result.rows)
            res.sendStatus(201);
        })
        .catch( error => {
            console.log('Error in posting movie at the Router',error);
            res.sendStatus(500)
        })
}); //end post for movie 


module.exports = router;