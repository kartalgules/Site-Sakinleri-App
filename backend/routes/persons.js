const express = require('express');
const { 
    personGet, 
    personCreate, 
    personRead, 
    personUpdate, 
    personDelete 
} = require('../controllers/personController');

//  Router Created
const router = express.Router();

//  All person get
router.get('/',personGet)

//  Create
router.post('/', personCreate)

//  Read
router.get('/:id', personRead)

//  Update
router.patch('/:id', personUpdate)

//  Delete
router.delete('/:id', personDelete)

module.exports = router;