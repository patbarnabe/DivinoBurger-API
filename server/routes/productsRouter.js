const { Router } = require('express');
const {
  getAllProducts, getProductById, postProduct, putProduct, deleteProduct,
} = require('../controller/productsController');

const router = Router();

router.get('/', getAllProducts);
router.post('/', postProduct);
router.get('/:product_id', getProductById);
router.put('/:product_id', putProduct);
router.delete('/:product_id', deleteProduct);

module.exports = router;
