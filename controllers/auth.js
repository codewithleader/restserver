const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'Email not valid' });
    }

    // Check if user is active
    if (!user.state) {
      return res.status(404).json({ msg: 'User not active' });
    }

    // Check if password is correct
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(404).json({ msg: 'Password not valid' });
    }

    // Create token
    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Server error. There is an error here!',
    });
  }
};

module.exports = {
  login,
};
