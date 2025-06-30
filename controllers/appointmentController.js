const Appointment = require('../models/Appointment');

// Create appointment
const createAppointment = async (req, res) => {
  try {
    const { petName, ownerName, contact, date, time, reason } = req.body;

    // Simple validation
    if (!petName || !ownerName || !contact || !date || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAppointment = new Appointment({
      petName,
      ownerName,
      contact,
      date,
      time,
      reason,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully!', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update appointment
const updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment updated', appointment: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
};
