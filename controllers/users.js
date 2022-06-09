const { response } = require('express');

// ? ::CRUD:: Create, Read, Update, Delete.
// Create
const usersPOST = (req, res = response) => {
  const { ...data } = req.body;
  res.json({
    msg: 'post API - Controller',
    data,
  });
};

// Read
const usersGET = (req, res = response) => {
  res.json({
    msg: 'get API - Controller',
  });
};

// Update/Replace
const usersPUT = (req, res = response) => {
  res.json({
    msg: 'put API - Controller',
  });
};

// Update/Modify
const usersPATCH = (req, res = response) => {
  res.json({
    msg: 'patch API - Controller',
  });
};

// Delete
const usersDELETE = (req, res = response) => {
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
