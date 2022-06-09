const { response } = require('express');

const usersGET = (req, res = response) => {
  res.json({
    msg: 'get API - Controller',
  });
};

const usersPOST = (req, res = response) => {
  const { ...data } = req.body;
  res.json({
    msg: 'post API - Controller',
    data,
  });
};

const usersPUT = (req, res = response) => {
  res.json({
    msg: 'put API - Controller',
  });
};

const usersPATCH = (req, res = response) => {
  res.json({
    msg: 'patch API - Controller',
  });
};

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
