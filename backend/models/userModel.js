const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Sema = mongoose.Schema;

const userSchema = new Sema({
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

userSchema.statics.signup = async function(email,password){

    if(!email || !password){
        throw Error('Required field. Please fill out.')
    }
    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email.')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('The password is not strong enough.')
    }
    
    const userControl = await this.findOne({email});

    if(userControl){
        throw Error('Email address is already in use');
    };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    const user = await this.create({email,password:hashPassword});
    return user;
};

userSchema.statics.login = async function(email,password){

    if(!email || !password) {
        throw Error('Fields cannot be empty.');
    };

    const user = await this.findOne({email});

    if(!user){
        throw Error('Email not found.');
    };

    const passwordControl = await bcrypt.compare(password,user.password);

    if(!passwordControl){
        throw Error('You entered an incorrect password.');
    };

    return user;
}
module.exports = mongoose.model('User',userSchema);