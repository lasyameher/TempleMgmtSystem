const { response } = require('express')
const Appointment = require('../models/Appointment')
const User = require('../models/Users')

//Show details of appointments

const getAppointments = (req, res, next) => {
    Appointment.find().then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            
            message: 'An error occured!'
        })
    })
}

// Get Appointment by Id

const getAppointmentById = (req, res, next) => {
    let appointmentId = req.body.appointmentId
    Appointment.findById(appointmentId).then(appointment => {
        res.send(appointment)
        
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Add new Appointment

const addAppointment = (req, res, next) => {

    let appointment = new Appointment({
        appointmentReason : req.body.appointmentReason,
        appointmentDate : req.body.appointmentDate,
        priestId : req.body.priestId,
        description : req.body.description,
        status : req.body.status,
        userId : req.body.userId,
    })
    appointment.save()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        console.log(error)
        res.json({
            error
        })
    })
}

//Update an Appointment

const updateAppointment = (req, res, next) => {
    let appointmentId = req.body.appointmentId

    let updatedData = {
        appointmentReason : req.body.appointmentReason,
        appointmentDate : req.body.appointmentDate,
        priestId : req.body.priestId,
        description : req.body.description,
        status : req.body.status,
        userId : req.body.userId,
    }
    Appointment.findByIdAndUpdate(appointmentId, {$set: updatedData})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete an Appointment
const deleteAppointment = (req, res, next) => {
    let appointmentId = req.body.appointmentId
    Appointment.findOneAndRemove(appointmentId)
    .then(() =>{
        req.json({
            message: 'Appointment deleted successfully'
        })        
    })
    .catch(error =>{
        console.log(error)
        req.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    getAppointmentById, getAppointments, addAppointment, updateAppointment, deleteAppointment
}