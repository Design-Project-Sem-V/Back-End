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
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://Umang:umangrathod@cluster0.dfyu3vv.mongodb.net/HMS-DB", {useNewUrlParser :true});

app.get('/',(req,res)=>{
    res.send(`Successfully connected to port ${port}`);
});

app.post('/signup_user', (req, res)=>{
    const NewUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        password:req.body.password,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: _.capitalize(req.body.gender),
        bloodgroup: req.body.bloodgroup
    });
    NewUser.save();
    res.send("User details saved successfully");
});


app.post('/signup_doctor', (req, res)=>{
    const NewDoctor = new Doctor({
        name: req.body.name,
        phone: req.body.phone,
        password:req.body.password,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: _.capitalize(req.body.gender),
        bloodgroup: req.body.bloodgroup,
        experience: req.body.experience,
        speciality: req.body.speciality,
        degree: req.body.degree,
        profilepicture: req.body.profilepicture
    });
    if(NewDoctor.save()){
        console.log(NewDoctor);
    }
    res.send("Doctor details saved successfully");
});

app.get('/login_user', (req, res)=>{
    const data = {
        password:String(req.body.password),
        email: String(req.body.email),
    }
    User.findOne({email:data.email}, (err, result)=>{
        if(!err){
            if(result != null){
                if(result.password === data.password){
                    res.send(true);
                }
                else{
                    res.send(false);
                }
            }
            else{
                res.send("EXISTANCE_ERROR")
            }
        }
        else{
            res.send("INTERNAL_ERROR");
        }
    }); 
});

app.get('/login_doctor', (req, res)=>{
    const data = {
        password:String(req.body.password),
        email: String(req.body.email),
    }
    Doctor.findOne({email:data.email}, (err, result)=>{
        if(!err){
            if(result != null){
                if(result.password === data.password){
                    res.send(true);
                }
                else{
                    res.send(false);
                }
            }
            else{
                res.send("EXISTANCE_ERROR")
            }
        }
        else{
            res.send("INTERNAL_ERROR");
        }
    }); 
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});