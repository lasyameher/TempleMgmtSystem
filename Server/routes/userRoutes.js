const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const UserController = require('../controllers/userController')


router.get('/GetUsers', UserController.getUsers)
router.post('/Login', UserController.userLogin) 
router.post('/RegisterUser', UserController.addUser) 
router.post('/UpdateUser', UserController.updateUser) 
router.get('/DeleteUser', UserController.deleteUser) 
router.get('/SearchUsers', UserController.searchByName)
router.get('/GetUser', UserController.showUser) 

module.exports = router