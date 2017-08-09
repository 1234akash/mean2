//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app=express();  //using express method and assigning it to a variable 
const route = require('./routes/route.js');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/demo');
mongoose.connection.on('connected',()=>{
	console.log('connected to database');
});

//port no
const port = 3000;

//adding middleware cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routers
app.use('/api',route);

app.get('/',(req,res)=>{
	res.send('home page');
});
//binding server to this port
app.listen(port,()=>{
   console.log('server started at port 3000');
});