const express = require('express');
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.post('/products', addProduct);
router.get('/products', getAllProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
