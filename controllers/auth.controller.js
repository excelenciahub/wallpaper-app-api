const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const db = require("../models");
const User = db.user;


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).send({ status: false, message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                status: false,
                message: "Invalid Password!"
            });
        }

        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });

        const response = JSON.parse(JSON.stringify(user));
        response['accessToken'] = token;
        delete response['password'];

        res.status(200).send({ status: true, data: response, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}