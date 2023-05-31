const employeesModels = require('../models/employeesModels');


exports.getAllEmployees = async () => {
    const employees = await employeesModels.findAll();
    return employees;
}

exports.getByEmployeeNumber = async (employeeNumber) => {
    const employee = await employeesModels.findByPk(employeeNumber);
    return employee;
}

exports.createEmployee = async (employee) => {
    const newEmployee = await employeesModels.create(employee);
    return newEmployee;
}

exports.updateEmployee = async(employeeNumber, employee) => {
    const updateEmployee = await employeesModels.update(employee, {
        where: {
            employeeNumber: employeeNumber
        }
    });
    return updateEmployee;
}

exports.deleteEmployee = async(employeeNumber) => {
    await employeesModels.destroy({
        where: {
            employeeNumber: employeeNumber
        }
    })
}