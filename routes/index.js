const router = require("express").Router();

// Routes
const userRoute = require("./user.route");
const authRoute = require("./auth.route");

router.use("/user", userRoute);
router.use("/auth", authRoute);


module.exports = router;