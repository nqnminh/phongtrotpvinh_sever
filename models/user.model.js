const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    phone: String,
    address: String,
    city: String,
    date: String,
    status: Number,
    image: String,
    _v: Number,
    district: String
})

const User = mongoose.model('User', userSchema);

module.exports=User;