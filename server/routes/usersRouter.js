const { Router } = require('express');
const { getExample, getOtherExample } = require('../controller/exampleController');

const router = Router();

// aqui vão as requisições
router.get('/', getExample);

router.get('/other', getOtherExample);
router.delete('/other', getOtherExample);
router.put('/other', getOtherExample);
router.post('/other', getOtherExample);

module.exports = router;
