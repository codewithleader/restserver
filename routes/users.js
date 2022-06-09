const { Router } = require('express');
const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users');

const router = Router();

router.get('/', usersGET);

router.post('/', usersPOST);

router.put('/:id', usersPUT);

router.delete('/', usersDELETE);

router.patch('/', usersPATCH);

module.exports = router;
