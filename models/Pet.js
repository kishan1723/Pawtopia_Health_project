const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Dog, Cat
  age: { type: Number, required: true },
  breed: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);
