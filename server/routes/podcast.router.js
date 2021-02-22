const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




//GET route to get finished title/ season/ episode for ListPodcast
router.get('/', (req, res) => {

    const queryText = `
        SELECT "title", "season", "episode"
        FROM "media"
        WHERE "media_type_id" = 4 AND "status" = 'finished' AND "user_id" = $1
        ORDER BY "date" DESC;`;
    pool.query(queryText, [req.user.id])
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log('ERROR getting books', error);
            res.sendStatus(500);
        })
}); //end get for podcast




//POST route to add a new podcast item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title", "season", "episode", "thoughts", "date", "status", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title, 
                                req.body.season,
                                req.body.episode, 
                                req.body.thoughts, 
                                req.body.date, 
                                req.body.status,
                                req.user.id, 
                               ])
        .then( result => {
            console.log('New Podcast Entry:', result.rows)
            res.sendStatus(201);
        })
        .catch( error => {
            console.log('Error in posting podcast at the Router',error);
            res.sendStatus(500)
        })
}); //end post for podcast 


module.exports = router;