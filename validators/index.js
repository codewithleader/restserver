const { check } = require('express-validator');

const {
  isValidRole,
  isEmailExist,
  isUserByIdExist,
  isCategoryByIdExist,
} = require('../helpers/db-validator');
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
  check('id', 'Is Not a valid ID').isMongoId(),
  check('id').custom(isUserByIdExist),
  check('role').custom(isValidRole),
  validateResult,
];

const validateDel = [
  validateJWT,
  // isAdminRole,
  haveRole('ADMIN_ROLE', 'SELLER_ROLE'),
  check('id', 'Is Not a valid ID').isMongoId(),
  check('id').custom(isUserByIdExist),
  validateResult,
];

// FOR AUTHENTICATION MIDDLEWARE.
const validatePostAuth = [
  check('email', 'Email is required').exists().isEmail(),
  check('password', 'Password is required').exists().not().isEmpty(),
  validateResult,
];

// FOR AUTHENTICATION MIDDLEWARE.
const validatePostAuthGoogle = [
  check('id_token', 'id_token is required').exists().not().isEmpty(),
  validateResult,
];

// FOR CATEGORIES MIDDLEWARE.
const validateCreateCategory = [
  validateJWT,
  check('name', 'Name is required').exists().not().isEmpty(),
  validateResult,
];

const validateGetCategory = [
  check('id', 'Is Not a valid ID').isMongoId(),
  check('id').custom(isCategoryByIdExist),
  validateResult,
];

const validateUpdateCategory = [
  validateJWT,
  check('name', 'Name is required').exists().not().isEmpty(),
  check('id', 'Is Not a valid ID').isMongoId(),
  check('id').custom(isCategoryByIdExist),
  validateResult,
];

const validateDeleteCategory = [
  validateJWT,
  isAdminRole,
  check('id', 'Is Not a valid ID').isMongoId(),
  check('id').custom(isCategoryByIdExist),
  validateResult,
];

module.exports = {
  validatePost,
  validatePut,
  validateDel,
  validatePostAuth,
  validatePostAuthGoogle,
  validateCreateCategory,
  validateGetCategory,
  validateUpdateCategory,
  validateDeleteCategory,
};
