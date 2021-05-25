const employeeOperation = require("../services/employeeCRUD");
const Employee = require("../dto/employee");

const employeeController = {
  async addEmployee(req, res) {
    try {
      let { ename, email, age, salary  } = req.body;
      let employeeObject = new Employee(ename, email, age, salary);
      let employee = await employeeOperation.addEmployee(employeeObject);
      if(employee){
        return res.json({ status: 200, message: "Employee Added Succesfully" });
      }
      return res.json({ status: 401, message: "Error Adding Employee" });
    } 
    catch (err) {
      return res.json({ status: 503, err: err });
    }
  },

  async readEmployees(req, res) {
    try {
      let employees = await employeeOperation.findEmployees();
      if(employees){
        return res.json({ status: 200, employees: employees });
      }
      return res.json({ status: 401, message: "Error Showing Employee" });
    } 
    catch (err) {
      return res.json({ status: 503, err: err });
    }
  },
  
  async updateEmployee(req, res) {
    try {
      let { _id, ename, email, age, salary } = req.body;
      let employeeObj = { _id, ename, email, age, salary };
      
      let employee = await employeeOperation.updateEmployee(employeeObj);
      if(employee){
        return res.json({ status: 200, message : "Employee Updated Succesfully" });
      }
      return res.json({ status: 401, message: "Error Updating Employee" });
    } 
    catch (err) {
      return res.json({ status: 503, err: err });
    }
  },

  async removeEmployee(req, res) {
    try {
      let { _id  } = req.body;
      let employees = await employeeOperation.deleteEmployee(_id);
        return res.json({ status: 200, message: "Employee Deleted Successfully" });
      
    } 
    catch (err) {
      return res.json({ status: 503, err: err });
    }
  },

};

module.exports = employeeController;