const { Router } = require('express');
const {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
} = require('../controller/usersController');
const { auth } = require('../controller/authController');

const router = Router();

router.get('/', auth, getAllUsers);
router.get('/:user_id', auth, getUserById);
router.post('/', postUser);
router.put('/:user_id', auth, putUser);
router.delete('/:user_id', auth, deleteUser);

module.exports = router;
