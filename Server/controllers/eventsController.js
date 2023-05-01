const EventDetails = require('../models/Events')

//Show details of events

const getEventDetails = (req, res, next) => {
    EventDetails.find().then(response => {
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

// Get event by Id

const getEventDetailsById = (req, res, next) => {
    let eventId = req.body.eventId
    EventDetails.findById(eventId)
    .then(event =>{
        res.send(event)        
    })
    .catch(error =>{
        console.log(error)
        res.json({
            message: 'An error occured!'
        })
    })
}

//Add new event

const addEvent = (req, res, next) => {
    let eventDetails = new EventDetails({
        eventName : req.body.eventName,
        eventStartDate : req.body.eventStartDate,
        eventEndDate : req.body.eventEndDate,
        //descriptions : req.body.descriptions,
        //status : req.body.status,
    })
    eventDetails.save()
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

//Update event

const updateEventDetails = (req, res, next) => {
    let eventId = req.body.eventId

    let updatedData = {
        eventName : req.body.eventName,
        eventStartDate : req.body.eventStartDate,
        eventEndDate : req.body.eventEndDate,
        //descriptions : req.body.descriptions,
        //status : req.body.status,

    }
    EventDetails.findByIdAndUpdate(eventId, {$set: updatedData})
    .then(() => {
        res.json({
            message:'Event Updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete a Event
const deleteEvent = (req, res, next) => {
    let eventId = req.body.eventId
    EventDetails.findByIdAndDelete(eventId)
    .then(() =>{
         res
    })
    .catch(error =>{
        console.log(error)
        
    })
}

module.exports = {
    getEventDetails, getEventDetailsById, addEvent, updateEventDetails, deleteEvent
}