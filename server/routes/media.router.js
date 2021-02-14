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



module.exports = router;