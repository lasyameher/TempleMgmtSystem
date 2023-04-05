const CardDetails = require('../models/CardDetails')
const User = require('../models/Users')

//Show details of cards

const getCardDetails = (req, res, next) => {
    CardDetails.find().then(response => {
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

// Get Card Detail by Id

const getCardDetailsById = (req, res, next) => {
    let cardId = req.body.cardId
    CardDetails.findOne(cardId)
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

//Add new Card

const addCard = (req, res, next) => {
    user = req.params;
    id = user.id;
    let cardDetails = new CardDetails({
        cardNumber : req.body.cardNumber,
        cardHolderName : req.body.cardHolderName,
        cardType : req.body.cardType,
        secretCode : req.body.secretCode,
        expiryDate : req.body.expiryDate,
        userDetails : id,
    })
    cardDetails.save()
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

//Update card

const updateCardDetails = (req, res, next) => {
    let cardId = req.body.cardId

    let updatedData = {
        cardNumber : req.body.cardNumber,
        cardHolderName : req.body.cardHolderName,
        cardType : req.body.cardType,
        secretCode : req.body.secretCode,
        expiryDate : req.body.expiryDate,
    }
    CardDetails.findByIdAndUpdate(cardId, {$set: updatedData})
    .then(() => {
        res.json({
            message:'Card Updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete a Card
const deleteCard = (req, res, next) => {
    let cardId = req.body.cardId
    CardDetails.findOneAndRemove(cardId)
    .then(() =>{
        req.json({
            message: 'Card deleted successfully'
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
    getCardDetailsById, getCardDetails, addCard, updateCardDetails, deleteCard
}