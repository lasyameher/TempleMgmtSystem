const mongoose = require('mongoose')

const CardDetailsSchema = new mongoose.Schema({
    cardNumber : {
        type: String,
        required: true,
    },
    secretCode : {
        type: String,
        required: true,
    },
    expiryDate : {
        type: Date,
        required: true,

    },
    cardType : {
        type: String,
        required : true,

    },
    cardHolderName : {
        type : String,
        required : true,
        
    },
    userDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    
});

const CardDetailsModel = mongoose.model("cardDetails", CardDetailsSchema)
module.exports = CardDetailsModel;