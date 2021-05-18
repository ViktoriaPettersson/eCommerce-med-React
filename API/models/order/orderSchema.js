const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
    cart: { type: Object, required: true },
    userInfo: { type: Object, required: true },

    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
});

module.exports = mongodb.model('Order', orderSchema)