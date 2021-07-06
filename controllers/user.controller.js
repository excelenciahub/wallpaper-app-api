const bcrypt = require("bcryptjs");

const db = require("../models");
const User = db.user;

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send({ status: true, data: users, message: "Users fetched successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.send({ status: true, data: user, message: "User fetched successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.add = async (req, res) => {
    try {
        const { first_name, last_name, email, password, description } = req.body;

        if (!first_name || !last_name || !email || !password) {
            res.status(500).send({ status: false, message: "Some fields are missing from request" });
        }

        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: bcrypt.hashSync(password, 8),
            description: description
        }

        const user = await User.create(data);
        res.send({ status: true, data: user, message: "User added successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.update = async (req, res) => {
    try {
        const { id, first_name, last_name, email, description } = req.body;

        if (!id, !first_name || !last_name || !email) {
            res.status(500).send({ status: false, message: "Some fields are missing from request" });
        }

        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            description: description
        }

        const user = await User.update(data, { where: { id: id } });
        console.log(user.length)
        if (user[0] === 1) {
            res.send({ status: true, data: {}, message: "User updated successfully" })
        } else {
            res.status(500).send({ status: false, message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!` });
        }
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.destroy({ where: { id: id } });
        console.log(user)
        if (user == 1) {
            res.send({ status: true, data: {}, message: "User deleted successfully" })
        } else {
            res.status(500).send({ status: false, message: `Cannot delete User with id=${id}. Maybe User was not found or req.body is empty!` });
        }
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}