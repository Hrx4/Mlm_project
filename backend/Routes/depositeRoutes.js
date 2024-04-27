const express = require('express');
const { createDeposite, getDeposite, getUserDeposite, acceptDeposite } = require('../Controllers/depositeController');

const router= express.Router()

router.route('/').post(createDeposite).get(getDeposite);
router.route('/user/:id').post(getUserDeposite)
router.route('/accept').post(acceptDeposite)
module.exports = router