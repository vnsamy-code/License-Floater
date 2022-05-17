const express = require('express');
const { validateInputs } = require('../controllers/controllerCommon');
const homeController = require('../controllers/homePageController');
const issueLicenseController = require('../controllers/issueLicenseController');
const router = express.Router();

// Home
router.get('/', homeController.homePage);

// License
router.get('/license', validateInputs(issueLicenseController.issueNewLicense))

module.exports = router;