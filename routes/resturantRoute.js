const express = require('express')
const authMiddleware = require('../middleware/authMiddleware');
const { createResturantController, delRestController, getAllResturantController } = require('../controllers/resturantController');

const router = express.Router();

//routes
//create resturant ||post
router.post('/create', authMiddleware, createResturantController)

//Get all Resturant
router.get('/getall', getAllResturantController)


//del resturant
router.delete('/del/:id', authMiddleware, delRestController)


module.exports = router;