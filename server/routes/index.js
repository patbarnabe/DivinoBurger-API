const { Router } = require('express');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');
const authRouter = require('./authRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/auth', authRouter);

module.exports = router;
