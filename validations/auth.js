const { body }  = require('express-validator');

module.exports = regValidation = [
    body('email').isEmail(),
    body('password', 'Ошибка пароля' ).isLength({min: 5}),
    body('fullName').isLength({min: 3}),
    body('avatarUrl').optional().isURL(),
];

 