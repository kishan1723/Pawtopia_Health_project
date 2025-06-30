const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  ownerName: { type: String, required: true },
  contact: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String },
  status: { type: String, default: 'Pending' } // or Confirmed, Cancelled
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
