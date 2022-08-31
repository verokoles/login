// page for inpout validation and user model 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../..config/keys");

//input validation
const validateLoginInput= require("../../validation/login");
const validateRegisterInput= require("../../validation/register");


//user.js model loaded
const User = require("../../models/User");

//registration portion
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // form valid.
  const { errors, isValid } = validateRegisterInput(req.body);
  // check if valid
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //mongodb, see if user exists
  User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        return res.status(400).json({ username: "username already exists" });
        //if not, new user filled in name, username, pass fields, send to body of request
      } else {
        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password
        });

  //hash pw before storing in db
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  //LOGIN portion
  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // form valid.
  const { errors, isValid } = validateLoginInput(req.body);
  // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const username = req.body.username;
    const password = req.body.password;
  // find user by username
    User.findOne({ username }).then(user => {
      // check if user exists
      if (!user) {
        return res.status(404).json({ usernamenotfound: "username not found" });
      }
  // check pw
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched and  JWT payload created
          const payload = {
            id: user.id,
            name: user.name
          };
  // sign the token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  // export our router to use it elsewhere.
  module.exports = router;
 
  