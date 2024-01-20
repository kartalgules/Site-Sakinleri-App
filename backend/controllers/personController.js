const mongoose = require('mongoose');
const personModels = require('../models/personModels');
const personSchema = require('../models/personModels');

//  All Person Get Method
const personGet = async (req,res) => {
    const persons = await personModels.find()
    res.status(200).json(persons).sort({
        block:1,
        apartment:1
    })
}

//  Create Method
const personCreate = async (req,res) => {
    const {block,apartment,fullname,tel} = req.body;

    try {
        const person = await personSchema.create({block,apartment,fullname,tel})
        res.status(200).json(person)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

//  Read Method
const personRead = async (req,res) => {
    const { id } = req.params;
    //  ID validation
    !mongoose.Types.ObjectId.isValid(id) && res.status(404).json({Error : 'İd invalid'});

    const person = await personModels.findById(id);
    !person && res.status(404).json({Error : 'Person not found'});
    res.status(200).json(person);
}

//  Update Method
const personUpdate = async (req,res) => {
    const { id } = req.params;
    //  ID validation
    !mongoose.Types.ObjectId.isValid(id) && res.status(404).json({Error : 'İd invalid'});

    const person = await personModels.findByIdAndUpdate({_id:id},{

        ...req.body
    },{new:true});
    !person && res.status(404).json({Error : 'Person not found'});
    res.status(200).json(person);

}

//  Delete Method
const personDelete = async (req,res) => {
    const { id } = req.params;
    //  ID validation
    !mongoose.Types.ObjectId.isValid(id) && res.status(404).json({Error : 'İd invalid'});

    const person = await personModels.findOneAndDelete({_id:id});
    !person && res.status(404).json({Error : 'Person not found'});
    res.status(200).json(person);
}

module.exports = {
    personGet,
    personCreate,
    personRead,
    personUpdate,
    personDelete
}