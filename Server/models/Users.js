const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    },
    address : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    role : {
        type: String,
        required: true
    },
    phoneno : {
        type: String,
        required: true,
    },
    appointments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "appointments"
    }],
    cardDetails : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "cardDetails"
    }],
    donations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "donations"
    }]
    
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;