const express = require('express');
const { createTrading, tradingAccept, userTrading, allTrading } = require('../Controllers/tradingControllers');

const router= express.Router()
router.route('/').post(createTrading).get(allTrading);
router.route('/accept').put(tradingAccept);
router.route('/user').get(userTrading);


module.exports = router