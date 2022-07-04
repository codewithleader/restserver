const { check } = require('express-validator');

const { allowedCollections } = require('../helpers/db-validator');
const { validateResult, validateUploadFile } = require('../middlewares');

const validateUpdatePicture = [
  validateUploadFile,
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
  validateUpdatePicture,
  validateGetPicture,
};
