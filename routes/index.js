const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
const paymentsController = require('../controllers/paymentsController')

router.post('/signin', authController.signin)

router.get('/payments/:id', paymentsController.getUserPayments)

router.post('/add-payment/:id', paymentsController.addPayment)

module.exports = router
