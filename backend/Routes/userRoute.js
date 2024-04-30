const express = require('express');
const { createUser, updateBankInfo, updateKyc, updateProfile, getUser, getAllUser, updatePassword } = require('../Controllers/userController');

const router= express.Router()

router.route('/').post(createUser);
router.route('/detail').post(getUser);
router.route('/alldetail').post(getAllUser);
router.route('/password/:id').put(updatePassword);
router.route('/bank/:id').put(updateBankInfo);
router.route('/kyc/:id').put(updateKyc);
router.route('/profile/:id').put(updateProfile);


module.exports = router