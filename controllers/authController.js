const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const { username, email, phone, password, address, answer } = req.body;
        //validation
        if (!username || !email || !password || !address || !phone || !answer) {
            return res.status(500).send({
                success: false,
                message: 'please provide all fields'
            })

        }
        //check user
        const existing = await userModel.findOne({ email: email })
        console.log("existing", existing)
        if (existing) {
            return res.status(500).send({
                suucess: false,
                message: 'Email already registered'
            });
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        //create new user
        const user = await userModel.create({
            username, email, password: hashedPassword, address, phone, answer
        });

        res.status(201).send({
            success: true,
            message: 'successfully registered'
        });



    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in register', error
        });

    }

};
//login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: 'please provise email,password', error

            })
        }
        //check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })
        };
        //check user password ||compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: 'Invalid credentials'
            })
        }
        //token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "8d"
        })
        res.status(200).send({
            success: true,
            message: 'login successfully',
            token,
            user
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In Login', error
        })



    }
}
module.exports = { registerController, loginController };