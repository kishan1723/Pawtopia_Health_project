const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require('../controllers/orderController');
const { getOrderHistory } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/orders', createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.get('/history/:userId', getOrderHistory);


module.exports = router;
