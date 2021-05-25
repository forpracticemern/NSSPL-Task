const express = require("express");
const route = express.Router();

const userController = require("../controllers/userController");

route.post("/login", userController.login);
route.post("/register", userController.register);

module.exports = route;