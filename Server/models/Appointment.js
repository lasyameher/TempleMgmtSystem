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
    priestName : {
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
    userDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
});

const AppointmentModel = mongoose.model("appointments", AppointmentsSchema)
module.exports = AppointmentModel;