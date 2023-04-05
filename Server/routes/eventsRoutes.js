const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const EventController = require('../controllers/eventsController')


router.get('/GetEvents', EventController.getEventDetails) // working
router.get('/GetEventById', EventController.getEventDetailsById) //working
router.post('/AddEvent', EventController.addEvent) //Working
router.post('/UpdateEvent', EventController.updateEventDetails) // working
router.get('/DeleteEvent', EventController.deleteEvent) // 

module.exports = router