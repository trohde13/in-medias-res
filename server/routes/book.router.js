const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



//POST route to add a new book item to database
router.post('/', (req, res) => {
    console.log(req.body);
    const insertMediaQuery = `
    INSERT INTO "media" ("media_type_id", "title_book", "author", "thoughts_book", "date", "status_book")
    VALUES ($1, $2, $3, $4, $5, $6);`;

    pool.query(insertMediaQuery, [req.body.media_type_id, 
                                req.body.title_book, 
                                req.body.author, 
                                req.body.thoughts_book, 
                                req.body.date, 
                                req.body.status_book, 
                               ])
        .then( result => {
            console.log('New Book Entry:', result.rows)
            res.sendStatus(201);
        })
        .catch( error => {
            console.log('Error in posting book at the Router',error);
            res.sendStatus(500)
        })
}); //end post for media 


module.exports = router;