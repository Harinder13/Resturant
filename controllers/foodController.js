//creat food

const authMiddleware = require("../middleware/authMiddleware");
const foodModel = require("../models/foodModel")


const createFoodController = async (req, res) => {
    try {
        const { foods, title, category, resturant } = req.body
        //validation
        if (!foods || !category || !title || !resturant) {
            return res.status(404).send({
                success: false,
                message: 'please provide fields '
            })
        }
        const newFood = new foodModel({ foods, title, category, resturant });
        await newFood.save()
        res.status(201).send({
            success: true,
            message: 'new food is created', newFood
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'food is not created', error
        })
    }
}

//getall food
const getFoodController = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        //validation
        if (!foods) {
            return res.status(404).send({
                success: false,
                message: 'food is not found'
            })
        }
        res.status(200).send({
            success: true,
            totalFoods: foods.length, foods
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error in get food api', error
        })
    }
}


//get single food
const getSingleFoodController = async (req, res) => {
    try {
        const foodid = req.params.id
        const food = await foodModel.findById(foodid)

        if (!food) {
            return res.status(500).send({
                success: false,
                message: 'please provide Id',
            })
        }
        res.status(200).send({
            success: true,
            food
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error in food itme api', error
        })
    }

}
//update food
const updFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success: false,
                message: 'no food id was found'
            })

        }
        const food = await foodModel.findById(foodId)
        if (!food) {
            return res.status(404).send({
                success: false,
                message: 'no food found'
            })

        }
        const { foods, category, resturant, title } = req.body
        const updatedFood = await foodModel.findByIdAndUpdate(foodId, { foods, category, resturant, title }
            , { new: true });
        res.status(200).send({
            success: true,
            message: 'food items are update successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succcess: false,
            message: 'not updated', error
        })

    }

}



module.exports = { createFoodController, getFoodController, getSingleFoodController, updFoodController }