const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const AppointmentController = require('../controllers/appointmentController')


router.get('/GetAppointments', AppointmentController.getAppointments)
router.get('/GetAppointmentById', AppointmentController.getAppointmentById) 
router.post('/AddAppointment', AppointmentController.addAppointment) 
router.post('/UpdateAppointment', AppointmentController.updateAppointment) 
router.get('/DeleteAppointment', AppointmentController.deleteAppointment) 

module.exports = router