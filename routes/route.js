const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retriving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
    	console.log(contacts);
       res.json(contacts);   //in json format we are sending the contacts
    });
});

//adding contact
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
    	firstName:req.body.firstName,
    	lastName:req.body.lastName,
    	phoneNo:req.body.phoneNo
    });
    newContact.save((err,contact)=>{
        if(err){
        	res.json({msg:'failed to add contact'})
        }
        else{
        	res.json({msg:'contact successfully added'})
        }
    });
});

//deleting contact
router.delete('/contact/:id',(req,res,next)=>{
  Contact.remove({_id:req.params.id},function(err,result){
     if(err){
        res.json(err);
     }
     else{
        res.json(result); 
     }
  })
});
module.exports = router;