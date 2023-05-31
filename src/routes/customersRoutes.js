const express = require('express')
const router = express.Router();

const customerControllers = require('../controllers/customersControllers');

router.get('/', customerControllers.getAllCustomers);
router.get('/:customerNumber', customerControllers.getByCustomerNumber);
router.post('/', customerControllers.createCustomer);
router.put('/:customerNumber', customerControllers.updateCustomer);
router.delete('/:customerNumber', customerControllers.deleteCustomer);

module.exports = router;