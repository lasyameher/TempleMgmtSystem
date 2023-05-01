const mongoose = require('mongoose')

const EventsSchema = new mongoose.Schema({
    eventName : {
        type : String,
        required : true,
    },
    eventStartDate : {
        type : Date,
        required : true,
    },
    eventEndDate : {
        type : Date,
        required : true,
    },
    /*descriptions : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },*/
    
});

const EventsModel = mongoose.model("eventDetails", EventsSchema)
module.exports = EventsModel;