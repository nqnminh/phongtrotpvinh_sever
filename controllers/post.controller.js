const Post = require('../models/post.model');

module.exports.index= async (req,res)=>{
    const post = await Post.find();
    res.json(post);
}