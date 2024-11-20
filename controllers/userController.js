//get user info

const { emit } = require("nodemon")
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');



const getUserController = async (req, res) => {
    try {

        //find user
        const user = await userModel.findById({ _id: req.body.id })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })
        }
        //hide password
        user.password = undefined
        //resp
        res.status(200).send({
            success: true,
            message: 'user get successfully', user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get user', error
        })
    }
}

const updateUserController = async (req, res) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.body.id })
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found', error
            })

        }
        //update
        const { username, address, phone } = req.body;
        if (username) user.username = username
        if (address) user.address = address
        if (phone) user.phone = phone
        //save
        await user.save()
        res.status(200).send({
            success: true,
            message: 'update successfully'

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({

            success: false,
            message: 'error in updating', error
        })
    }

}
//reset password
const resetPsdController = async (req, res) => {
    try {
        const { email, newpassword, answer } = req.body
        if (!email || !newpassword || !answer) {
            return res.status(500).send({
                success: false,
                message: 'please provide all fields'
            })
        }
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'user not found or invalid answer'
            })
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);
        user.password = hashedPassword;
        await user.save()
        res.status(200).send({
            success: true,
            message: 'Password reset successfully'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in reset password', error
        })
    }
}

//update password
const upPsdController = async (req, res) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.body.id })
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })

        }
        //get data from user
        const { oldPassword, newPassword } = req.body
        if (!oldPassword || !newPassword) {
            return res.status(500).send({
                success: false,
                message: 'provide oldpassword or newpassword'
            })
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: 'Invalid oldpassword'
            })
        } var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt)
        user.password = hashedPassword
        await user.save()
        res.status(200).send({
            success: true,
            message: 'pasword updated!'
        });



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in updatig password', error

        })

    }

}

//delete
const delPsdController = async () => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success: true,
            message: 'deleted successfully'
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'errror in deleting password', error
        })

    }
}

module.exports = { getUserController, updateUserController, resetPsdController, upPsdController, delPsdController }