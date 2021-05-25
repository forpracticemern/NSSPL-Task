const EmployeeModel = require("../db/models/employeeSchema");

const employeeCRUD = {
  addEmployee(userObject) {
    return EmployeeModel.create(userObject);
  },
  findEmployees(){
    return EmployeeModel.find().limit(10);
  },
  findEmployeeById(_id) {
    return EmployeeModel.findOne({_id});
  },
  updateEmployee(user) {
    return EmployeeModel.findByIdAndUpdate(user._id, {$set : user} ,{ new: true } )
  },
  deleteEmployee(employee_id) {
    return EmployeeModel.findByIdAndRemove({_id: employee_id});
  },
};

module.exports = employeeCRUD;