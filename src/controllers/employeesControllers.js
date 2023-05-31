const employeeRepository = require('../repositories/employeesRepository');

exports.getAllEmployees = async (req, res) => {
    const employees = await employeeRepository.getAllEmployees();
    res.json(employees);
}

exports.getByEmployeeNumber = async (req, res) => {
    const employee = await employeeRepository.getByEmployeeNumber(req.params.employeeNumber);
    res.json(employee);
}

exports.createEmployee = async (req, res) => {
    const employee = await employeeRepository.createEmployee(req.body);
    res.json(employee);
}

exports.updateEmployee = async (req, res) => {
    const employee = await employeeRepository.updateEmployee(req.params.employeeNumber);
    res.json({sucess: true});
}

exports.deleteEmployee = async (req, res) => {
    await employeeRepository.deleteEmployee(req.params.employeeNumber);
    res.json({sucess: true});
}