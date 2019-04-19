const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT * FROM "item" WHERE "user_id" = $1;`;
    pool.query(sqlText, [req.user.id])
        .then(result => {
            let shelf = result.rows
            console.log(`successfully got all the stuff!`, shelf);
            res.send(shelf)// For testing only, can be removed
        }).catch(error => {
            console.log(`error getting all the stuff`, error);
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    let newItem = req.body;
    console.log(req.user);
    console.log(req.body);

    const sqlText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES( $1, $2, $3 );`;
    pool.query(sqlText, [newItem.description, newItem.image_url, req.user.id])
    .then( response => {
        console.log(`successfully added newItem to database`, newItem);
        res.sendStatus(201);
    }).catch( error => {
        console.log(`error adding newItem to database`, error);
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    const sqlText = `DELETE FROM "item" WHERE "id"=$1;`;
    pool.query( sqlText, [id])
    .then( response => {
        console.log(`successfully deleted item from database at`, id);
        res.sendStatus(204)
    }).catch( error => {
        console.log(`error deleting item from database at`, id);
        res.sendStatus(500);
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;