const { request, response } = require('express');
const { path } = require('path');
const fs = require('fs');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { helperUploadFile } = require('../helpers/uploadFile');

const { User, Product } = require('../models');

const uploadFile = async (req = request, res = response) => {
  try {
    const name = await helperUploadFile(req.files, undefined, 'pictures');
    res.json({ name });
  } catch (msg) {
    res.status(400).json({ msg, from: 'controllers/uploads.js' });
  }
};

const updatePicture = async (req = request, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case 'users':
      model = await User.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a user with the id ${id}`,
        });
      }
      break;
    case 'products':
      model = await Product.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a product with the id ${id}`,
        });
      }
      break;

    default:
      return res.status(500).json({
        msg: 'There is no validation for these case yet, please contact the developer',
      });
  }

  // Clean the previous picture
  if (model.picture) {
    const pathPicture = path.join(__dirname, '../uploads', collection, model.picture);
    if (fs.existsSync(pathPicture)) {
      fs.unlinkSync(pathPicture);
    }
  }

  const name = await helperUploadFile(req.files, undefined, collection);
  model.picture = name;

  await model.save();

  res.json(model);
};

const updatePictureCloudinary = async (req = request, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case 'users':
      model = await User.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a user with the id ${id}`
        });
      }
      break;
    case 'products':
      model = await Product.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a product with the id ${id}`
        });
      }
      break;
    default:
      return res.status(500).json({
        msg: `There is no validation for these case yet, please contact the developer`
      })
  }

  // Clean the previous picture
  if (model.picture) {
    const nameArray = model.picture.split('/');
    const name = nameArray[nameArray.length - 1];
    const [ public_id ] = name.split('.');
    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
  model.picture = secure_url;

  await model.save();

  res.json(model);
}

const getPicture = async (req = request, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case 'users':
      model = await User.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a user with the id ${id}`
        });
      }
      break;
    case 'products':
      model = await Product.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `Not exist a product with the id ${id}`
        });
      }

    default:
      return res.status(500).json({
        msg: `There is no validation for these case yet, please contact the developer`
      })
  }

  // Clean the previous picture
  if (model.picture) {
    const pathPicture = path.join(__dirname, '../uploads', collection, model.picture);
    if (fs.existsSync(pathPicture)) {
      return res.sendFile(pathPicture)
    }
  }

  const pathPicture = path.join(__dirname, '../assets/no-image.jpg');
  res.sendFile(pathPicture);
}

module.exports = {
  uploadFile,
  updatePicture,
  updatePictureCloudinary,
  getPicture,
};
