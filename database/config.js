const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
  }
};

module.exports = {
  dbConnection,
};