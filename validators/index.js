const { check } = require('express-validator');
const { isValidRole, isEmailExist, isUserByIdExist } = require('../helpers/db-validator');

// const { validateResult } = require('../../helpers/validateHelper');
// const { validateJWT } = require('../validate-jwt');
// const { isAdminRole, haveRole } = require('../validate-roles');

const { validateResult, validateJWT, isAdminRole, haveRole } = require('../middlewares');

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
  validateJWT,
  // isAdminRole,
  haveRole('ADMIN_ROLE', 'SELLER_ROLE'),
  check('id', 'Not is valid id Elis').isMongoId(),
  check('id').custom(isUserByIdExist),
  validateResult,
];

// FOR AUTHENTICATION MIDDLEWARE.
const validatePostAuth = [
  check('email', 'Email not found').exists().isEmail(),
  check('password', 'Password is required').exists().not().isEmpty(),
  validateResult,
];

module.exports = { validatePost, validatePut, validateDel, validatePostAuth };
