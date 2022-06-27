const { request, response } = require('express');
const { Category } = require('../models');

const createCategory = async (req = request, res = response) => {
  const name = req.body.name.toUpperCase();

  const categoryDB = await Category.findOne({ name });

  if (categoryDB) {
    return res.status(400).json({
      msg: `Category ${categoryDB.name} already exists`,
    });
  }

  // Generate data for the new category
  const data = {
    name,
    user: req.user._id,
  };

  const category = new Category(data);

  await category.save();

  res.status(201).json({
    msg: 'Category created',
    data: category,
  });
};

module.exports = {
  createCategory,
};
