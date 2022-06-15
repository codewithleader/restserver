const { Router } = require('express');
const { body } = require('express-validator');

const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users');
const { validateCreate } = require('../middlewares/validators/users');

const router = Router();

router.post(
  '/',
  validateCreate,
  usersPOST
);

router.get('/', usersGET);

router.put('/:id', usersPUT);

router.patch('/', usersPATCH);

router.delete('/', usersDELETE);

module.exports = router;
