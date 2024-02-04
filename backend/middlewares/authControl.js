const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authControl = async (req,res,next) => {
    const {authorization} = req.headers;

    console.log(req.headers)

    if(!authorization){
        return res.status(401).json({Error : 'Authorization token is required'})
    }
    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token,process.env.SECRET_KEY);
        req.user = await User.findOne({_id}).select('_id');
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({Error : 'The request is unauthorized.'});
    }
}
module.exports = authControl;