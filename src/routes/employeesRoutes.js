const express = require('express');
const router = express.Router();

const employeesControllers = require('../controllers/employeesControllers');

router.get('/', employeesControllers.getAllEmployees);
router.get('/:employeeNumber', employeesControllers.getByEmployeeNumber);
router.post('/', employeesControllers.createEmployee);
router.put('/:employeeNumber', employeesControllers.updateEmployee);
router.delete('/:employeeNumber', employeesControllers.deleteEmployee);

module.exports = router;