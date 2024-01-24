const userModel = require('../models/userModel');
const User = require('../models/userModel')

const loginUser = async (req,res) => {
    res.json({mesaj:'Login işlemi gerçekleşti'})
}

const singUpUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.singup(email,password);
        res.status(200).json({email,user});
    } catch (error) {
        res.status(400).json({Error : error.message})
    }
}

module.exports = {
    loginUser,
    singUpUser
}