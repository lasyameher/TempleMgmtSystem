const Newsletter = require('../models/Appointment')
//const User = require('../models/Users')

//Show details of appointments

const getNewsletterRequests = (req, res, next) => {
    Newsletter.find().then(response => {
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


//Add new Newsletter

const addNewsletter = (req, res, next) => {
    let newsletter = new Newsletter({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
    })
    newsletter.save()
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


module.exports = {
    getNewsletterRequests, addNewsletter
}