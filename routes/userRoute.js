const express = require('express');
const { getUserController, updateUserController, resetPsdController, upPsdController, delPsdController } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


//routes
//GET USER


router.get('/getUser', authMiddleware, getUserController)

//update
router.put('/upuser', authMiddleware, updateUserController)

//reset password
router.post('/repsd', authMiddleware, resetPsdController)

//UPDATE PASSSWORD
router.put('/uppsd', authMiddleware, upPsdController)
router.delete('/del/:id', authMiddleware, delPsdController)

module.exports = router;