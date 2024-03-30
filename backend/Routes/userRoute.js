const express = require('express');
const { createUser } = require('../Controllers/userController');

const router= express.Router()

router.route('/').post(createUser);


module.exports = router