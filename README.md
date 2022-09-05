# XCentium Login Challenge
### MERN stack login page repository

## Purpose:heavy_exclamation_mark:

To create a successful login and logout page using a username and password. The user must be able to access the homepage upon successful login and see their name displayed. Upon logout, the user is taken back to the main login page. Unsuccessful login/wrong credentials will display an error message. The homepage should only be seen once the user is successfully logged in.<br>
![Log In Page](client/public/mern-login.png) <br>

## Table of Contents::mag:

1.  [ LIVE DEPLOY:octocat: ](#github)
2.  [ Installation:hammer: ](#installation)
3.  [ Contributing:handshake: ](#contributing)

## Github

[Click Here](https://verokoles.github.io/mern-login/) to view the application live! <br>

Successful LogIn takes user to homepage:
![Successful LogIn takes user to homepage]() <br>
Unsuccecssful Log In:
![Error Message for wrong credentials]()


## Installation

To install dependancies, run the following commands:

     ```
     `npm i` to install node_modules in client, server and root, `npm init` to initialize the project.

     `npm i bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator`: this will install all the packages for validating and parsing user data. Then `nodemon` installed to run on dev server and make changes to code.
     ```
     Then change scripts to:
      `"scripts": {
      "start": "concurrently \"cd server && npm run start\" \"cd client && npm start\"",
      "server": "nodemon server.js",
      "install": "cd server && npm i && cd ../client && npm i",
      "build": "cd client && npm run build"
      }` in the root and adjust the client and server scripts
     ```  
     `npm i express validator` <br>

     - install all packages and set up the backend, <br>
     - connect MongoDB database with user and set the URI in server/config/keys <br>
     - create react-app in client directory
     - create components from the landing page, the login/register pages, and the homepage
     - 
     - run `npm start` from root level to start up the MERN login form!





## Contributing:

Please be kind and professional when adding to or accessing this repository. Thank you!
[More on Contribution Guidelines](https://github.com/verokoles/readme-generator/blob/f57cf6a98bf276960885496059df4b039247c985/contributing.md