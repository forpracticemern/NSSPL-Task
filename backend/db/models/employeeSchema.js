const connection = require("../connection");
const Schema = connection.Schema;
const config = require('../../utils/config');

const EmployeeSchema = new Schema({
    ename:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: {type: Number, required: true},
    salary: {type: Number, required: true},
    doj: {type: Date, default: new Date()},
  },
  { timestamps: true });

const EmployeeModel = connection.model( config.employeeCollection, EmployeeSchema);

module.exports = EmployeeModel;