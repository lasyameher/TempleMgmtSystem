const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const NewsletterController = require('../controllers/newsletterController')


router.get('/GetNewsletterRequests', NewsletterController.getNewsletterRequests)
router.post('/AddNewsletter', NewsletterController.addNewsletter) 

module.exports = router