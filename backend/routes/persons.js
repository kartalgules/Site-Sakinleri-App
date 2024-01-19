const express = require('express');
const personModel = require('../models/personModels')
const router = express.Router();

router.get('/',(req,res) => {
    res.json({msg: 'Bütün Sakinler'})
})

//  Create
router.post('/', async (req,res) => {
    const {block,apartment,fullname,tel} = req.body;

    try {
        const sakin = await personModel.create({block,apartment,fullname,tel})
        res.status(200).json(sakin)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

//  Read
router.get('/:id',(req,res) => {
    res.json({msg:`${req.params.id} id'li notu getir`})
})

//  Update
router.patch('/:id', (req,res) => {
    res.json({msg :`${req.params.id} id'li Notu güncelle`})
})

//  Delete
router.delete('/:id', (req,res) => {
    res.json({msg :`${req.params.id} id'li Notu sil`})
})

module.exports = router;