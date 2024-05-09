const express = require('express');
const { createWithdraw, userWithdraw, allWithdraw, withdrawAccept } = require('../Controllers/withdrawController');

const router= express.Router()

router.route('/').post(createWithdraw);
router.route('/user').post(userWithdraw);
router.route('/all').post(allWithdraw);
router.route('/accept').put(withdrawAccept);


module.exports = router