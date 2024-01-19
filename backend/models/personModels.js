const mongoose = require('mongoose');
const { Schema } = mongoose;

//  Schema Create
const personSchema = new Schema({
    block : {
        type:String,
        required:true
    },
    apartment : {
        type:String,
        required:true
    },
    fullname : {
        type:String,
        required:true
    },
    tel : {
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Person',personSchema)