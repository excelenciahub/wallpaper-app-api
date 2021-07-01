const router = require("express").Router();

// Controllers
const userController = require("../controllers/user.controller");


router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.post("/", userController.add);
router.put("/", userController.update);
router.delete("/:id", userController.delete);


module.exports = router;