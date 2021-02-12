const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//POST route to add a new podcast item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title_podcast", "season_podcast", "episode_podcast", "thoughts_podcast", "date", "status_podcast")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title_podcast, 
                                req.body.season_podcast,
                                req.body.episode_podcast, 
                                req.body.thoughts_podcast, 
                                req.body.date, 
                                req.body.status_podcast, 
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