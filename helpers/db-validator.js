const Role = require('../models/role');
const { User, Category, Product } = require('../models');

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

// Validate category id exists
const isCategoryByIdExist = async id => {
  const categoryExist = await Category.findById(id);

  if (!categoryExist) {
    throw new Error(`Category with id: ${id}, doesn't exist in the database`);
  }
};

// Validate product id exists
const isProductByIdExist = async id => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new Error(`Product with id: ${id} doesn't exist in the database`);
  }
};


const allowedCollections = (collection = '', collections = []) => {
  const isInclude = collections.includes(collection);
  if (!isInclude) {
    throw new Error(`Collection ${collection} is not allowed. Allowed collections are: ${collections.join(', ')}`);
  }
  return true;
}

module.exports = {
  isValidRole,
  isEmailExist,
  isUserByIdExist,
  isCategoryByIdExist,
  isProductByIdExist,
  allowedCollections,
};
