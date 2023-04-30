const { body } = require('express-validator');

module.exports = loginValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 5}),
]