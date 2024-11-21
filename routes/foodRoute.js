const express = require('express')
const authMiddleware = require('../middleware/authMiddleware');
const { createFoodController, getFoodController, getSingleFoodController, updFoodController, placeOrderController } = require('../controllers/foodController');

const router = express.Router();

//router food
router.post('/create', authMiddleware, createFoodController)

//get all food
router.get('/getall', authMiddleware, getFoodController)

//get single food
router.get('/get/:id', getSingleFoodController)
//update food
router.put('/updfood/:id', authMiddleware, updFoodController)

//place ordeer
router.post('/placeorder', authMiddleware, placeOrderController)

module.exports = router;

