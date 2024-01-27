const jwt = require('jsonwebtoken');
const user = require('../models/userModel');

const authControl = async (req,res,next) => {
    const {authorazation} = req.headers;
    if(!authorazation){
        return res.status(401).json({Error : 'Authorization token is required'})
    }
    const token = authorazation.split(' ')[1];

    try {
        const {_id} = jwt.verify(token,process.env.SECRET_KEY);
        req.user = await user.findOne({_id}).select(_id);
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({Error : 'The request is unauthorized.'});
    }
}
module.exports = authControl;