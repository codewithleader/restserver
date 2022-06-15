const { check } = require('express-validator');
const { isValidRole, isEmailExists } = require('../../helpers/db-validator');
const { validateResult } = require('../../helpers/validateHelper');

const validateCreate = [
  check('name', 'Name is required').exists().not().isEmpty(),
  check('password', 'Password should be at least 6 characters').exists().isLength({ min: 6 }),
  check('email', 'Email is not valid').exists().isEmail(),
  check('email').custom(isEmailExists),
  // check('role', 'Role is not valid').exists().isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(isValidRole),
  validateResult,
];

module.exports = { validateCreate };
