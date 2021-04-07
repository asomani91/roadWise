const router = require("express").Router();

const dashboardController = require("../../controllers/dashboard");

// Matches with "/api/books"
router.route("/")
  .get(dashboardController.findAll)


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dashboardController.findById)
  .put(dashboardController.update)
  .delete(dashboardController.remove);

module.exports = router;
