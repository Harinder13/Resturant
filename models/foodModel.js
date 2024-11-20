const mongoose = require('mongoose');

//schema
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, foodTags: { type: String },
    category: {
        type: [String],
        enum: ['spicy', 'sour', 'sweet']
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Resturant'
    },
    foods: {
        type: [String],
        enum: ['daal', 'paneer', 'cake']
    }

});

module.exports = mongoose.model('Food', foodSchema);