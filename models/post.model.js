const mongoose = require('mongoose');

const postShema = new mongoose.Schema({
    title : String,
    description : String,
    neighborhood : String,
    district: String,
    city: String,
    address: String,
    price: Number,
    area: Number,
    datepost: String,
    dateend: String,
    _vip: Number,
    category: String,
    status: Number
})

const Post = mongoose.model('Post', postShema);

module.exports = Post;