const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const CardController = require('../controllers/cardController')


router.get('/GetCards', CardController.getCardDetails)
router.get('/GetCardById', CardController.getCardDetailsById) 
router.post('/AddCard', CardController.addCard) 
router.post('/UpdateCard', CardController.updateCardDetails) 
router.get('/DeleteCard', CardController.deleteCard) 

module.exports = router