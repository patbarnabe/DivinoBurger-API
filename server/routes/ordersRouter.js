const { Router } = require('express');
const {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');
const { auth } = require('../controller/authController');

const router = Router();

router.get('/', auth, getAllOrders);
router.get('/:order_id', auth, getOrderById);
router.post('/', auth, postOrder);
router.put('/:order_id', auth, putOrder);
router.delete('/:order_id', auth, deleteOrder);

module.exports = router;
