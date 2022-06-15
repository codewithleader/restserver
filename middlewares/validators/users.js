const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');
const Role = require('../../models/role');

const validateCreate = [
  check('name', 'Name is required').exists().not().isEmpty(),
  check('password', 'Password should be at least 6 characters').exists().isLength({ min: 6 }),
  check('email', 'Email is not valid').exists().isEmail(),
  // check('role', 'Role is not valid').exists().isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(async(role = '') => {
    const existRole = await Role.findOne({ role });
    if (!existRole) {
     throw new Error(`Role ${role} is not registered in database`);
    }
  }),
  validateResult,
];

module.exports = { validateCreate };
