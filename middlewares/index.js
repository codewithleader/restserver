const validateHelper = require('./validateFields');
const validateJWT = require('./validate-jwt');
const validateRoles = require('./validate-roles');

module.exports = {
  ...validateHelper,
  ...validateJWT,
  ...validateRoles,
}