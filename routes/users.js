const { Router } = require('express');

const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users');
const {
  validatePost,
  validatePut,
} = require('../middlewares/validators/middlewaresForValidations');

const router = Router();

router.post('/', validatePost, usersPOST);

router.get('/', usersGET);

router.put('/:id', validatePut, usersPUT);

router.patch('/', usersPATCH);

router.delete('/', usersDELETE);

module.exports = router;
