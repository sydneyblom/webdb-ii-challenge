const express = require('express');

const router = express.Router();

const DB = require('../data/dbConfig');

router.post('/',  (req, res) => {
    DB
    .insert(req.body, 'id') 
    .into('cars')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to add car' });
    });
});

router.get('/', (req, res) => {
    DB.select('*')
    //returns a promise once gets post sends it back to the client
    .from('cars')
    .then(car => {
        res.status(200).json(car) 
    })
    .catch(error =>  {
        res.status(500).json({message: "Failed to get cars from DB"})
    })
});

router.get('/:id', (req, res) => {
    DB.select ('*')
    .from('cars')
    //select form db where id is equal to req.params.id
    .where('id', '=', req.params.id)
    //need this or it will send back an array since when you do select it is expecting you are getting
    //back a collection of things.
    .first()
    .then(account => {
        res.status(200).json(account);
    })
    .catch(error => {
        console.log("get by id error", error);
        res.status(500).json( {error: 'There was an error retrieving account from database.'});
    })
});



module.exports = router;