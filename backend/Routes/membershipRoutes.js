const express = require('express');
const { membershipFeeUpload } = require('../Controllers/membershipControllers');

const router= express.Router()

router.route('/').post(membershipFeeUpload);


module.exports = router