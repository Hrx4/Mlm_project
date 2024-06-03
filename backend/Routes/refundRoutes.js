const express = require('express');
const { createRefund, getRefundList, refundAccept, refundAdminAccept } = require('../Controllers/tradingControllers');

const router= express.Router()
router.route('/').post(createRefund).get(getRefundList);
router.route('/accept').put(refundAccept);
router.route('/adminaccept').put(refundAdminAccept);

// router.route('/user').get(userTrading);


module.exports = router