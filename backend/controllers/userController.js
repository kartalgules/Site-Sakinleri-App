const User = require('../models/userModel')

const loginUser = async (req,res) => {
    res.json({mesaj:'Login işlemi gerçekleşti'})
}

const singUpUser = async (req,res) => {
    res.json({mesaj:'SingUp işlemi gerçekleşti'})
}

module.exports = {
    loginUser,
    singUpUser
}