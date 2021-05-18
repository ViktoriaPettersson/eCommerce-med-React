const router = require('express').Router();
const orderModel = require('../models/order/orderModel')

router.get('/', orderModel.getOrder);
router.post('/new', orderModel.createOrder)


module.exports = router;