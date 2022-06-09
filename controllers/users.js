const { response, request } = require('express');

// ? ::CRUD:: Create, Read, Update, Delete.
// Create
const usersPOST = (req = request, res = response) => {
  const { ...data } = req.body;
  res.json({
    msg: 'post API - Controller',
    data,
  });
};

// Read
const usersGET = (req = request, res = response) => {
  const {...queries} = req.query;

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
