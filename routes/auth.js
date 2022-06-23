const { Router } = require('express');

const { login } = require('../controllers/auth');
const { validatePostAuth } = require('../validators');

const router = Router();

router.post('/login', validatePostAuth, login);

module.exports = router;