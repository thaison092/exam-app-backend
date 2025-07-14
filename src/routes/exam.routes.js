
const express = require('express');
const router = express.Router();
const controller = require('../controllers/exam.controller');

router.post('/submit', controller.submit);

module.exports = router;
