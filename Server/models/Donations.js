const mongoose = require('mongoose')

const DonationsSchema = new mongoose.Schema({
    typeOfDonation : {
        type: String,
        required: true,
    },
    amountPaid : {
        type: Number,
        required: true,
    },
    dateOfDonation : {
        type: Date,
        required: true,

    },
    transactionNumber : {
        type: String,
        required : true,

    },
    userId : {
        type : String,
        required : true,
    },
    // transactionDetails
    
});

const DonationsModel = mongoose.model("donations", DonationsSchema)
module.exports = DonationsModel;