const express = require('express');
const { registerController, loginController } = require('../controllers/authController');
const router = express.Router();
const validateUser = require('../middlewares/validationMiddleware');

//routes
//Register post
router.post('/register', validateUser, registerController);

//login Post
router.post('/login', loginController);



module.exports = router