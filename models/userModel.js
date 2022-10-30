const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    phone: {
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
    }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;