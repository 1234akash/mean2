const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	firstName:{
		type:String,
		required:true
	},
	lastName:{
		type:String,
		required:true
	},
	phoneNo:{
		type:String,
		required:true
	}
});

const Contact = module.exports = mongoose.model('mean2contact',ContactSchema,'mean2contact');