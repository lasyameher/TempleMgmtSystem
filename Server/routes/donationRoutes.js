const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const DonationController = require('../controllers/donationController')


router.get('/GetDonations', DonationController.getDonationDetails)
router.get('/GetDonationById', DonationController.getDonationsById) 
router.post('/AddDonation', DonationController.addDonation) 
router.post('/UpdateDonation', DonationController.updateDonationDetails) 
router.get('/DeleteDonation', DonationController.deleteDonation) 

module.exports = router