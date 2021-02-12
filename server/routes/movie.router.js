const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//POST route to add a new media item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title_movie", "year", "thoughts_movie", "date", "status_movie")
    VALUES ($1, $2, $3, $4, $5, $6);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title_movie, 
                                req.body.year, 
                                req.body.thoughts_movie, 
                                req.body.date, 
                                req.body.status_movie, 
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