const express = require('express');
const router = express.Router();

const officesRouter = require('./officesRoutes');

router.use('/offices', officesRouter);

module.exports = router;