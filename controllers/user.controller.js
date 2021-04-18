const User =require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

module.exports.index= async (req , res)=>{
    const user = await User.findById(req.user._id);
    res.json(user);
}

module.exports.signup = async(req, res)=>{

}

module.exports.signin= async(req, res)=>{
    const user = await User.findOne({username: req.body.username});
    if(!user){
        return res.status(400).send('User is not found.');
    }
    const token= jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    const validPassword= await bcrypt.compare(req.body.password , user.password);
    
    if(!validPassword) return res.status(400).send('Invalid password');
    res.status(200).json({token: token});
}

