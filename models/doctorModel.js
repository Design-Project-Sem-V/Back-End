const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    phone: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    birthday: {
        type:Date,
        required: true
    },
    gender: {
        type:String,
        required: true
    },
    bloodgroup: {
        type:String,
        required: true
    },
    experience: {
        type:String,
        required: true
    },
    speciality: {
        type:String,
        required: true
    },
    degree: {
        type:String,
        required: true
    },
    profilepicture: {
        type:String,
        required: true
    }
});


const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
