const express = require('express')
const authMiddleware = require('../middleware/authMiddleware');
const { createCatController, updCatController, getAllCatController, delCatController } = require('../controllers/categoryController');

const router = express.Router();

//routes
//create catgory
router.post('/create', authMiddleware, createCatController)

//update category
router.put('/updcat', authMiddleware, updCatController)


//get all
router.get('/getall', getAllCatController)

//delete category
router.delete('/del/:id', authMiddleware, delCatController)


module.exports = router;