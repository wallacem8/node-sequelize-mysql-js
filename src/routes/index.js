const express = require('express');
const router = express.Router();

const officesRouter = require('./officesRoutes');
const customerRouter = require('./customersRoutes');
const employeeRouter = require('./employeesRoutes');

router.use('/offices', officesRouter);
router.use('/customers', customerRouter);
router.use('/employees', employeeRouter);

module.exports = router;