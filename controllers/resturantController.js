//create resturant

const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
    try {
        const { title, imageUrl, foods, isOpen, delivery } = req.body
        //validation
        if (!title || !foods || !isOpen || !delivery) {
            return res.status(500).send({
                success: false,
                message: 'please provide all info'
            })


        }
        const newResturant = new resturantModel({
            title, foods, imageUrl, isOpen, delivery
        })
        await newResturant.save();
        res.status(200).send({
            success: true,
            message: 'New Resturant created', newResturant
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in create Resturant api', error
        })

    }

}
//get all resturant
const getAllResturantController = async (req, res) => {
    try {
        const resturants = await resturantModel.find({})
        if (!resturants) {
            return res.status(404).send({
                success: false,
                message: 'no resturant available'
            })
        }

        res.status(200).send({
            success: true,
            totalCount: resturants.length, resturants
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in get rest api', error
        })


    }
    //delresturant


}
const delRestController = async (req, res) => {
    try {
        const restId = req.params.id
        if (!restId) {
            return res.status(404).send({
                success: false,
                message: 'rest is not found'
            })
        }
        await resturantModel.findByIdAndDelete(restId)
        res.status(200).send({
            success: true,
            message: 'deleted successfully'
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in deleting ', error
        })

    }
}






module.exports = { createResturantController, getAllResturantController, delRestController }