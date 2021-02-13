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