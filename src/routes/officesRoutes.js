const express = require('express');
const router = express.Router();

const officesController = require('../controllers/officesControllers');

router.get('/', officesController.getAllOffices);
router.get('/:officeCode', officesController.getByOfficeCode);
router.post('/', officesController.createOffice);
router.put('/:officeCode', officesController.updateOffice);
router.delete('/:officeCode', officesController.deleteOffice);

module.exports = router;