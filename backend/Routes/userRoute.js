const express = require('express');
const { createUser, updateBankInfo, updateKyc, updateProfile } = require('../Controllers/userController');

const router= express.Router()

router.route('/').post(createUser);
router.route('/bank/:id').post(updateBankInfo);
router.route('/kyc/:id').post(updateKyc);
router.route('/profile/:id').put(updateProfile);


module.exports = router