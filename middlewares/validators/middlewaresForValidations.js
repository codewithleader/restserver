const { check } = require('express-validator');
const { isValidRole, isEmailExist, isUserByIdExist } = require('../../helpers/db-validator');
const { validateResult } = require('../../helpers/validateHelper');

// For validations middleware.

const validatePost = [
  check('name', 'Name is required').exists().not().isEmpty(),
  check('password', 'Password should be at least 6 characters').exists().isLength({ min: 6 }),
  check('email', 'Email is not valid').exists().isEmail(),
  check('email').custom(isEmailExist),
  // check('role', 'Role is not valid').exists().isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(isValidRole),
  validateResult,
];

const validatePut = [
  check('id', 'Not is valid id Elis').isMongoId(),
  check('id').custom(isUserByIdExist),
  check('role').custom(isValidRole),
  validateResult,
];

const validateDel = [
  check('id', 'Not is valid id Elis').isMongoId(),
  check('id').custom(isUserByIdExist),
  validateResult,
];

module.exports = { validatePost, validatePut, validateDel };
