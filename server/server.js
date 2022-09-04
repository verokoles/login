// all dependencies and init app with express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const { MongoClient, ServerApiVersion } = require('mongodb');
const users = require("./models/validation/routes/api/users");

const app = express();

// bodyparser 
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// database configuration
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // passport middleware
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);
// routes
app.use("/api/users", users);

  // process.env.port on  Heroku
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and running on port ${port} !`));