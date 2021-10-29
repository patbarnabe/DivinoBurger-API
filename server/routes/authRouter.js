const express = require('express');

const router = express.Router();
const { login } = require('../controller/authController');

router.post('/', login);

module.exports = router;
