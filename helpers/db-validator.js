const Role = require('../models/role');
const User = require('../models/user');

// For custom validations

// Validate role exists
const isValidRole = async (role = '') => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`Role ${role} is not registered in database`);
  }
};

// Validate email exists
const isEmailExist = async (email = '') => {
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error(`Email ${email} is already registered in the database`);
    // return res.status(400).json({ msg: 'Email already exists' });
  }
};

// Validate user's id exists
const isUserByIdExist = async id => {
  const userExist = await User.findById(id);

  if (!userExist) {
    throw new Error(`User with id: ${id}, doesn't exist in the database`);
  }
};

module.exports = { isValidRole, isEmailExist, isUserByIdExist };
