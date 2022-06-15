const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`Role ${role} is not registered in database`);
  }
};

// Validate email exists
const isEmailExists = async (email = '') => {
  const emailExists = await User.findOne({ email });
if (emailExists) {
  throw new Error(`Email ${email} is already registered in the database`);
  // return res.status(400).json({ msg: 'Email already exists' });
}
};


module.exports = { isValidRole, isEmailExists };
