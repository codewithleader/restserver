const { check } = require('express-validator');

const { validateResult } = require('../middlewares');

// EMAIL AND PASSWORD AUTHENTICATION.
const validatePostAuth = [
  check('email', 'Email is required').exists().isEmail(),
  check('password', 'Password is required').exists().not().isEmpty(),
  validateResult,
];

// GOOGLE AUTHENTICATION.
const validatePostAuthGoogle = [
  check('id_token', 'id_token is required').exists().not().isEmpty(),
  validateResult,
];

module.exports = {
  validatePostAuth,
  validatePostAuthGoogle,
}