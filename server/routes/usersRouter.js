const { Router } = require('express');
const {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
} = require('../controller/usersController');

const router = Router();

router.get('/', getAllUsers);
router.get('/:user_id', getUserById);
router.post('/', postUser);
router.put('/:user_id', putUser);
router.delete('/:user_id', deleteUser);

module.exports = router;
