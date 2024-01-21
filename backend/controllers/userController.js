const User = require('../models/userModel')

const loginUser = async (req,res) => {
    res.json({mesaj:'Login işlemi gerçekleşti'})
}

const singUpUser = async (req,res) => {
    req.body
}

module.exports = {
    loginUser,
    singUpUser
}