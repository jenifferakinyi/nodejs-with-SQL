const express = require ('express')
const routes = express.Router();
const studentController = require('../Controller/studentController')




routes.post('/addStudent',studentController.addStudent)


module.exports = routes