const mongoose = require('mongoose')

const AppointmentsSchema = new mongoose.Schema({
    appointmentReason : {
        type: String,
        required: true,
    },
    appointmentDate : {
        type: Date,
        required: true,
    },
    priestId : {
        type: String,
        required: true,

    },
    description : {
        type: String,
        required : true,

    },
    status : {
        type: String,
        required: true,
    },
    userId : {
        type : String,
        required : true,
    },
});

const AppointmentModel = mongoose.model("appointments", AppointmentsSchema)
module.exports = AppointmentModel;