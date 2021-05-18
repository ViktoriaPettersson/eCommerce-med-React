const mongodb = require('mongoose');

const Order = require('./orderSchema');

exports.getOrder = (req, res) => {
    Order.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err))
}

exports.createOrder = (req, res) => {
    const NewOrder = new Order({
        cart: req.body.cart,
        userInfo: req.body.userInfo

    })
    NewOrder.save()
        .then(() => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Order created successfully'
            })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create order'
            })
        })
}