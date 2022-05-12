const express = require('express');
const homeController = require('../controllers/homePageController');
const router = express.Router();

router.get('/', homeController.homePage);

module.exports = router;