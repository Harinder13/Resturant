//cretae cat

const categoryModel = require("../models/categoryModel")

const createCatController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body
        //validation
        if (!title) {
            res.status(404).send({
                success: false,
                message: 'not found'
            })

        }
        const newCategory = new categoryModel({ title, imageUrl });
        await newCategory.save();
        res.status(201).send({
            success: true,
            message: 'category created', newCategory
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in category', newCategory
        })


    }
}

//get all cat
const getAllCatController = async (req, res) => {
    try {
        const categories = await categoryModel.find({})
        if (!categories) {
            return res.status(404).send({
                success: false,
                message: 'category not found'
            })
        }
        res.status(200).send({
            success: true,
            totalCat: categories.length, categories
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in get cat'
        })
    }
}
//update category
const updCatController = async () => {
    try {
        const { id } = req.params
        const { title, imageUrl } = req.body
        const updateCategory = await categoryModel.findByIdAndUpdate(id, { title, imageUrl }, { new: true })
        if (!updateCategory) {
            return res.status(500).send({
                success: false,
                message: 'no category found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'catgory created succcessfuly'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in updating category', error
        })

    }
}
//delete category
const delCatController = async (req, res) => {
    try {
        const { id } = req.params
        //validation
        if (!id) {
            return res.status(500).send({
                success: false,
                message: 'provide id'
            })
        }
        const category = await categoryModel.findById(id)
        if (!category) {
            return res.satus(404).send({
                success: false,
                message: "not ctegory foound"
            })
        }
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: 'category is deleted successfully'
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in deletinf category', error
        })



    }
}



module.exports = { createCatController, getAllCatController, updCatController, delCatController }