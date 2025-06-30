const Pet = require('../models/Pet');

// Create a pet
const createPet = async (req, res) => {
  try {
    const { name, type, age, breed } = req.body;
    const newPet = new Pet({ name, type, age, breed });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ message: 'Error creating pet' });
  }
};

// Get all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pets' });
  }
};

// Update pet
const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: 'Error updating pet' });
  }
};

// Delete pet
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting pet' });
  }
};

module.exports = { createPet, getAllPets, updatePet, deletePet };
