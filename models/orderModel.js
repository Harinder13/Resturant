const mongoose = require('mongoose');

//schema
const orderSchema = new mongoose.Schema({

    foods: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Food'
    },
    payment: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'

    },
    status: {
        type: String,
        enum: ['preparing', 'prepared', 'on the way', 'delivered'],
        default: 'preparing'
    }

});

module.exports = mongoose.model('Order', orderSchema);