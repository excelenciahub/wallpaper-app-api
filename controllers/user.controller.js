exports.findAll = (req, res) => {
    try {
        res.send({ status: true, data: [], message: "Users fetched successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.findById = (req, res) => {
    try {
        res.send({ status: true, data: {}, message: "User fetched successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.add = (req, res) => {
    try {
        res.send({ status: true, data: req.body, message: "User added successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.update = (req, res) => {
    try {
        res.send({ status: true, data: {}, message: "User updated successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}

exports.delete = (req, res) => {
    try {
        res.send({ status: true, data: {}, message: "User deleted successfully" })
    } catch (error) {
        res.status(500).send({ status: false, message: error && error.message ? error.message : "Something went wrong" });
    }
}