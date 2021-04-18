const cors = require('cors');
var express = require('express');
var path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const adminRoute = require('./routes/admin.route');
const userRoute = require('./routes/user.route');
const postRoute = require('./routes/posts.route');

var app = express();
const port = process.env.PORT || 8888;

mongoose.connect(
  process.env.MONGO_URL, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'phongtrotpvinh',
    useFindAndModify: false
  }
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router
app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);

app.get('/',(req,res)=> res.send('Hello!'));

app.listen(port, ()=>{
  console.log(`Example app listen at http://localhost:${port}`)
})

module.exports = app;