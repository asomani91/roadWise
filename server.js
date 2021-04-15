const express = require("express");
const passport = require("passport");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Add routes, both API and view


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roadWise");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/roadWise', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(passport.initialize());
app.use(passport.session());
// Start the API server
app.use(routes);
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});