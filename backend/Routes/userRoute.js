const express = require('express');
const { createUser, updateBankInfo, updateKyc, updateProfile, getUser, getAllUser, updatePassword, updateUser, adminUserList, getAllUserNo, getCustomerList, deleteUser } = require('../Controllers/userController');

const router= express.Router()

router.route('/').post(createUser).get(getAllUserNo)
router.route('/list').post(adminUserList);
router.route('/detail').post(getUser);
router.route('/update').put(updateUser);
router.route('/alldetail').post(getAllUser);
router.route('/password/:id').put(updatePassword);
router.route('/bank/:id').put(updateBankInfo);
router.route('/kyc/:id').put(updateKyc);
router.route('/profile/:id').put(updateProfile);
router.route('/customerlist').post(getCustomerList)
router.route('/delete').delete(deleteUser);


module.exports = router