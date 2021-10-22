const { Router } = require('express');
const ExampleRouter = require('./exampleRouter');

const router = Router();

// aqui vão todas as rotas
router.use('/users', ExampleRouter);
router.use('/products', ExampleRouter);
router.use('/orders', ExampleRouter);

router.use('/example', ExampleRouter);

module.exports = router;
