const express = require('express');
const router = express.Router();

// Controllers
const aulas = require('./aulas').default;

// Routes
router.use('/aulas', aulas)

exports.default = router
