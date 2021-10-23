const { Router } = require('express');
const {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');

const router = Router();

router.get('/', getAllOrders);
router.get('/:order_id', getOrderById);
router.post('/', postOrder);
router.put('/:order_id', putOrder);
router.delete('/:order_id', deleteOrder);

module.exports = router;
