const { response, request } = require('express');

const User = require('../models/user');

// ? ::CRUD:: Create, Read, Update, Delete.
// Create
const usersPOST = async (req = request, res = response) => {
  const body = req.body;
  const user = new User(body);

  await user.save();
  res.json({
    user,
  });
};

// Read
const usersGET = (req = request, res = response) => {
  const { ...queries } = req.query;

  res.json({
    msg: 'get API - Controller',
    queries,
  });
};

// Update/Replace
const usersPUT = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - Controller',
    id,
  });
};

// Update/Modify
const usersPATCH = (req = request, res = response) => {
  res.json({
    msg: 'patch API - Controller',
  });
};

// Delete
const usersDELETE = (req = request, res = response) => {
  res.json({
    msg: 'delete API - Controller',
  });
};

module.exports = {
  usersGET,
  usersPOST,
  usersPUT,
  usersDELETE,
  usersPATCH,
};
