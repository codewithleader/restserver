const { check } = require('express-validator');

const { allowedCollections } = require('../helpers/db-validator');
const { validateResult, uploadFileValidator, validateJWT, isAdminRole } = require('../middlewares');


const validateUploadFile = [
  validateJWT,
  isAdminRole,
  uploadFileValidator,
  validateResult,
]

const validateUpdatePicture = [
  uploadFileValidator,
  check('id', 'Is Not a valid MongoID').isMongoId(),
  check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
  validateResult,
];

const validateGetPicture = [
  check('id', 'Is Not a valid MongoID').isMongoId(),
  check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
  validateResult,
];

module.exports = {
  validateUploadFile,
  validateUpdatePicture,
  validateGetPicture,
};
