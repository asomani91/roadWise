const router = require("express").Router();
const addMaintenanceController = require("../../controllers/addMaintenanceController");

router.route("/")
    .get(addMaintenanceController.findAll)
    .post(addMaintenanceController.create);

router
    .route("/:id")
    .get(addMaintenanceController.findById)
    .put(addMaintenanceController.update)
    .delete(addMaintenanceController.remove);
    
module.exports = router;