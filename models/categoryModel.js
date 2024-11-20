const mongoose = require('mongoose');

//schema
const categorySchema = new mongoose.Schema({
    title: { type: String },
    imageUrl: {
        type: String,
        default: ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfood%2Blogo&psig=AOvVaw2arkwfU9xZ1udvBcm5v9ID&ust=1732095196358000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCNis2ciL6IkDFQAAAAAdAAAAABAE'
    }
}

);
module.exports = mongoose.model('Cat', categorySchema);