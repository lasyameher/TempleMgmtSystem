const DonationDetails = require('../models/Donations')

//Show details of donations made

const getDonationDetails = (req, res, next) => {
    DonationDetails.find().then(response => {
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

// Get donation by Id

const getDonationsById = (req, res, next) => {
    let donationId = req.body.donationId
    DonationDetails.findOne(donationId)
    .then(() =>{
        req.json({
            response
        })        
    })
    .catch(error =>{
        console.log(error)
        req.json({
            message: 'An error occured!'
        })
    })
}

//Add new donation

const addDonation = (req, res, next) => {
    user = req.params;
    id = user.id;
    let donationDetails = new DonationDetails({
       typeOfDonation : req.body.typeOfDonation,
       amountPaid : req.body.amountPaid,
       dateOfDonation : Date(),
       transactionNumber : req.body,transactionNumber,
       userDetails : id,

    })
    donationDetails.save()
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

//Update donation

const updateDonationDetails = (req, res, next) => {
    let donationId = req.body.donationId

    let updatedData = {
        
       typeOfDonation : req.body.typeOfDonation,
       amountPaid : req.body.amountPaid,
       dateOfDonation : Date(),
       transactionNumber : req.body,transactionNumber,

    }
    DonationDetails.findByIdAndUpdate(donationId, {$set: updatedData})
    .then(() => {
        res.json({
            message:'Donation Updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete a donation
const deleteDonation = (req, res, next) => {
    let donationId = req.body.donationId
    DonationDetails.findOneAndRemove(donationId)
    .then(() =>{
        req.json({
            message: 'Donation deleted successfully'
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
    getDonationDetails, getDonationsById, addDonation, updateDonationDetails, deleteDonation
}