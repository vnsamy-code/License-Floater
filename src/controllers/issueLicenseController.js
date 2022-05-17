const mongoose = require('mongoose');
const IssuedLicense = mongoose.model('IssuedLicense');
const uuid = require('uuid');
const controllerCommon = require('./controllerCommon');

exports.issueNewLicense = async (req, res) => {
    const email = req.body.email;
    const licenseCode = uuid.v4;
    const userId = `${email.split('@').substr(0, 3)}-${licenseCode.substr(0, 4)}`;

    console.table([email, licenseCode, userId]);
}