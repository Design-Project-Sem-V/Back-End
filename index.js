const express = require('express');
const app = express();
const _ = require('lodash');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000 || process.env.port;


// Models
const Doctor = require('./models/doctorModel');
const User = require('./models/userModel')


// Extra Settings :)
// app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://Umang:umangrathod@cluster0.dfyu3vv.mongodb.net/HMS-DB", {useNewUrlParser :true});

app.get('/',(req,res)=>{
    res.send(`Successfully connected to port ${port}`);
});


app.post('/login', (req, res)=>{
    const inptmail = req.body.usermail;
    User.findOne({email:req.body.usermail}, (err, result)=>{
        if(!err){
            res.send(result.name);
        }
        else{
            res.send("Something Went Wrong");
        }
    }); 
});

app.post('/test', (req,res)=>{
    const nameX = String(req.body.name);
    console.log(nameX)
    res.send(nameX);
})

app.post('/signup_user', (req, res)=>{
    const NewUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: req.body.gender,
        bloodgroup: req.body.bloodgroup
    });
    NewUser.save();
    res.send("User details saved successfully");
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});