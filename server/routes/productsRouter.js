const { Router } = require('express');
const {
  getAllProducts, getProductById, postProduct, putProduct, deleteProduct,
} = require('../controller/productsController');
const { auth } = require('../controller/authController');

const router = Router();

router.get('/', auth, getAllProducts);
router.post('/', auth, postProduct);
router.get('/:product_id', auth, getProductById);
router.put('/:product_id', auth, putProduct);
router.delete('/:product_id', auth, deleteProduct);

module.exports = router;
