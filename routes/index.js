const router = require("express").Router();

// Routes
const userRoute = require("./user.route");

router.use("/user", userRoute);


module.exports = router;