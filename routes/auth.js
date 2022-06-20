const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { validatePostAuth } = require('../middlewares/validators/middlewaresForValidations');

const router = Router();

router.post('/login', validatePostAuth, login);

module.exports = router;