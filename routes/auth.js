const { Router } = require('express');

const { login, googleSignIn } = require('../controllers/auth');
const { validatePostAuth, validatePostAuthGoogle } = require('../validators');

const router = Router();

router.post('/login', validatePostAuth, login);

router.post('/google', validatePostAuthGoogle, googleSignIn);

module.exports = router;
