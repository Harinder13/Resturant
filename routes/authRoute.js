const express = require('express');
const { registerController, loginController } = require('../controllers/authController');
const router = express.Router();
const validateUser = require('../middleware/validationMiddleware');

//routes
//Register post
router.post('/register', validateUser, registerController);

//login Post
router.post('/login', validateUser, loginController);



module.exports = router