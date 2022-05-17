const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const issuedLicenseSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    license: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: String,
        trim: true,
        required: true
    }
});