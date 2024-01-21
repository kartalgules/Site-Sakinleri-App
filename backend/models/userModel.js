const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Sema = mongoose.Schema();

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.static.singup = async (email,password) => {
    const userControl = await this.findOne({email});

    if(userControl){
        throw Error('Email address is already in use');
    };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    const user = await this.create({email,password:hashPassword});
    return user;
};

module.exports = mongoose.model('User',userSchema);