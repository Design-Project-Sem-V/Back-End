const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    birthday: Date,
    gender: String,
    bloodgroup: String,
    experience: Number,
    speciality: String,
    dengree: String,
    profilepicture: String
});


const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
