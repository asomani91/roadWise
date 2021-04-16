const router = require("express").Router();
const dashboardRoutes = require("./Dashboard");
const carRoutes = require("./cars")
const userRoutes = require("./user");
const signupRoutes = require("./signup");
const passport = require("../../passport/");
const maintenanceRoutes = require("./addMaintenance");


router.use("/dashboard", dashboardRoutes);
router.use("/cars", carRoutes);
router.use("/signup", signupRoutes);
router.use("/user", userRoutes);
router.use("/maintenance", maintenanceRoutes);

// Matches: /api/login
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("POST /api/login - req.user: ", req.user);
    const userInfo = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    };

    res.json(userInfo);
});

// kill -9 $(lsof -i:3001 -t) 2> /dev/null

// Matches: /api/login
router.get("/login", (req, res) => {
    console.log("GET /api/login, req.user: ", req.user);
    if (!req.user) {
        console.log("req.user does not exist");
        res.send("Not logged in yet!");
        // res.redirect("/login");
    } else {
        return res.json(req.user.name);
    }
});
// Matches /api/logout
router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ message: "Logged out!" });
    } else {
        res.send({ message: "Not signed in!" });
    }
});
module.exports = router;