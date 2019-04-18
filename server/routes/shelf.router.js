const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "item";`;
    pool.query(sqlText)
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
    const sqlText = `INSERT INTO "item" ("description", "img_url") VALUES( $1, $2 );`;
    pool.query(sqlText, [newItem.description, newItem.img_url])
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