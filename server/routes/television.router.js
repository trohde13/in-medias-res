const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//POST route to add a new television item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title_television", "season_television", "episode_television", "thoughts_television", "date", "status_television")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title_television, 
                                req.body.season_television,
                                req.body.episode_television, 
                                req.body.thoughts_television, 
                                req.body.date, 
                                req.body.status_television, 
                               ])
        .then( result => {
            console.log('New Television Entry:', result.rows)
            res.sendStatus(201);
        })
        .catch( error => {
            console.log('Error in posting television at the Router',error);
            res.sendStatus(500)
        })
}); //end post for television 


module.exports = router;