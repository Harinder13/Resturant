const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String

    },
    phone: {
        type: String,
        required: [true, 'phone number is required']
    },
    usertype: {
        type: String,
        required: [true, 'user type is required'],
        default: 'admin',
        enum: ['admin', 'vendor', 'driver']

    },
    profile: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
    },
    answer: {
        type: String,
        required: true

    }





});
module.exports = mongoose.model('User', userSchema);