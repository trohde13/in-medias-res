const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET route to retrieve all media from database to map
router.get('/', (req, res) => {

    const queryText = `SELECT * FROM "media" ORDER BY "date" DESC;`;
    pool.query(queryText)
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log('ERROR getting media', error);
            res.sendStatus(500);
        })
}); //end get for media



//POST route to add a new media item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title", "author", "thoughts", "date", "status", "year", "season", "episode")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title, 
                                req.body.author, 
                                req.body.thoughts, 
                                req.body.date, 
                                req.body.status, 
                                req.body.year, 
                                req.body.season, 
                                req.body.episode ])
        .then( result => {
            console.log('New Media Entry:', result.rows)
            res.sendStatus(201);
        })
        .catch( error => {
            console.log(error);
            res.sendStatus(500)
        })
}); //end post for media 


module.exports = router;