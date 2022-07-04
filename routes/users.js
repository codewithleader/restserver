const { Router } = require('express');

const {
  createUser,
  getUsers,
  updateUser,
  modifyUser,
  deleteUser,
} = require('../controllers/users');
const { validateCreateUser, validateUpdateUser, validateDeleteUser } = require('../validators');

const router = Router();

router.post('/', validateCreateUser, createUser);

router.get('/', getUsers);

router.put('/:id', validateUpdateUser, updateUser);

router.patch('/', modifyUser);

router.delete('/:id', validateDeleteUser, deleteUser);

module.exports = router;
