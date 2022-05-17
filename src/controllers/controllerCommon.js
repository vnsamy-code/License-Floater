exports.validateInputs = (fn) => {
    return function (req, res, next) {
        performEmailValidation(req, res, next)
    }
};

function performEmailValidation(req, res, next) {
    const email = req.body.email;
    const emailRegex = '/\S+@\S+\.\S+/';

    if (emailRegex.test(email)) {
        next();
        return;
    }

    const error = new Error('Invalid email.');
    error.status = 400;
    next(error);
}