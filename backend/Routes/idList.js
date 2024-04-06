const express = require('express');
const { acceptUser, getUserList } = require('../Controllers/idList');

const router= express.Router()

router.route('/').post(acceptUser).get(getUserList);


module.exports = router