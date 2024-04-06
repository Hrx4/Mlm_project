const express = require('express');
const { LoginUser } = require('../Controllers/loginController');

const router= express.Router()

router.route('/').post(LoginUser);


module.exports = router