const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET route to retrieve all media from database to map
router.get('/', (req, res) => {

    const queryText = `
        SELECT * FROM "media" 
        WHERE "user_id" = $1 
        ORDER BY "date" DESC;`;
    pool.query(queryText, [req.user.id])
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log('ERROR getting media', error);
            res.sendStatus(500);
        })
}); //end get for media


//GET route to retrieve date array
router.get('/datearray', (req, res) => {

    const queryText = `
        SELECT "date", ARRAY_AGG("id") AS "dateIDs"
        FROM "media"
        WHERE "user_id" = $1
        GROUP BY "date"
        ORDER BY "date" DESC;`
    pool.query(queryText, [req.user.id])
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log('ERROR getting datearray', error);
            res.sendStatus(500);
        })
}); //end get for date array



//DELETE route to delete media item
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "media" WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('ERROR in DELETE', error)
            res.sendStatus(500);
        })
});

//GET route to retrieve entry to edit
router.get('/:id', (req, res) => {
    //Get entry to update
    console.log(req.params.id)
    const id = req.params.id;
    const queryText = `SELECT * from "media" WHERE "id" = $1;`;
    pool.query(queryText, [id])
        .then( result => {
            res.send(result.rows);
        })
        .catch( error => {
            console.log(`ERROR in retrieving entry ${queryText}`, error)
            res.sendStatus(500);
        })
});


//PUT route to update entry after edit
router.put('/:id', (req, res) => {
    // Update this entry
    const idToUpdate = req.params.id;
    const queryText = `
        UPDATE "media"
        SET "date" = $1, "title" = $2, "author" = $3, "thoughts" = $4, "status" = $5, "year" = $6, "season" = $7, "episode" = $8
        WHERE "id" = $9;`;
    pool.query(queryText, [req.body.date,
                            req.body.title, 
                            req.body.author, 
                            req.body.thoughts,
                            req.body.status, 
                            req.body.year,
                            req.body.season,
                            req.body.episode,
                            idToUpdate
                        ])
        .then( result => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.log (`ERROR making database update ${queryText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;