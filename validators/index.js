const { check } = require('express-validator');

const {
  isValidRole,
  isEmailExist,
  isUserByIdExist,
  isCategoryByIdExist,
  isProductByIdExist,
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
  validateResult,
  check('id').custom(isCategoryByIdExist),
  validateResult,
];

// FOR PRODUCTS MIDDLEWARE.
const validateCreateProduct = [
  validateJWT,
  check('name', 'Name is required').not().isEmpty(),
  check('category', 'Category require a valid MongoID').isMongoId(),
  check('category').custom(isCategoryByIdExist),
  validateResult,
];

// Validate Get Products haven't any validations yet.
// const validateGetProducts = [];

const validateGetProduct = [
  check('id', 'Is Not a valid MongoID').isMongoId(),
  check('id').custom(isProductByIdExist),
  validateResult,
];

const validateUpdateProduct = [
  validateJWT,
  check('id', 'Id is required').exists().not().isEmpty(),
  check('name', 'Name is required').exists().not().isEmpty(),
  check('id').custom(isProductByIdExist),
  validateResult,
];

const validateDeleteProduct = [
  validateJWT,
  isAdminRole,
  check('id', 'Is Not a valid MongoId').isMongoId(),
  check('id').custom(isProductByIdExist),
  validateResult,
];

// FOR SEARCH MIDDLEWARE.
// const validateSearch = [
//   check('collection', 'Collection is required').exists().not().isEmpty(),
//   validateResult,
//   check('term', 'Term is required').exists().not().isEmpty(),
//   validateResult,
// ]

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
  validateCreateProduct,
  // validateGetProducts,
  validateGetProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  // validateSearch,
};
