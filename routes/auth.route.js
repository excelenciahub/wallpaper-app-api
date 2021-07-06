const router = require("express").Router();

// Controllers
const authController = require("../controllers/auth.controller");


router.post("/login", authController.login);


module.exports = router;