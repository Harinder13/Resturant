const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'test User data Api'
        });

    } catch (error) {
        console.log('error In test Api', error);

    }

}
module.exports = { testUserController };