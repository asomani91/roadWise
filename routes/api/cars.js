const router = require("express").Router();

const dashboardController = require("../../controllers/dashboard");

// Matches with "/api/books"
router.route("/")
  .get(dashboardController.findAllCar)
  .post(dashboardController.createCar);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dashboardController.findCarById)
  .put(dashboardController.update)
  .delete(dashboardController.remove);

module.exports = router;