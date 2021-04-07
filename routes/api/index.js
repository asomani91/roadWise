const router = require("express").Router();
const dashboardRoutes = require("./Dashboard");
const carRoutes = require("./cars")
// Book routes
router.use("/dashboard", dashboardRoutes);
router.use("/cars",carRoutes)

module.exports = router;
