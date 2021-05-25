const express = require("express");
const route = express.Router();

const employeeController = require("../controllers/employeeController");

route.post("/addEmployee", employeeController.addEmployee);
route.post("/updateEmployee", employeeController.updateEmployee);
route.post("/removeEmployee", employeeController.removeEmployee);
route.get("/readEmployee", employeeController.readEmployees);
module.exports = route;