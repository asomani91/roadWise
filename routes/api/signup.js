const router = require("express").Router();
const userController = require("../../controllers/user");

// Matches with "/api/signup"
router.route("/")
    .post(userController.create);

module.exports = router;