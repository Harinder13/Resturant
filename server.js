const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./config/db');
const authMiddleware = require('./middleware/authMiddleware');
const joi = require('joi');


// dotenv configuration
// dotenv.config();

//DB connection
db();


//test object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/test', require('./routes/testRoutes'));
app.use('/auth', require('./routes/authRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/resturant', require('./routes/resturantRoute'));
app.use('/category', require('./routes/categoryRoute'));
app.use('/food', require('./routes/foodRoute'));

app.get('/', (req, res) => {
    return res.status(200).send('welcome to food server');
});
//PORT
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);

});