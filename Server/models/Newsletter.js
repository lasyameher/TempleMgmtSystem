const mongoose = require('mongoose')

const NewsletterSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,

    },
});

const NewsLetterModel = mongoose.model("newsletter", NewsletterSchema)
module.exports = NewsLetterModel;