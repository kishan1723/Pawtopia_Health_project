const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { user, products, totalAmount } = req.body;

    const newOrder = new Order({ user, products, totalAmount });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.productId');
    if (!order) return res.status(404).json({ message: 'Order not found' });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Get Order History for a User
const getOrderHistory = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders || orders.length === 0) {
      const error = new Error("No orders found for this user");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder, getAllOrders, getOrderById, getOrderHistory, };
