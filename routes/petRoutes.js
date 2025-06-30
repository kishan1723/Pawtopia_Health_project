const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createPet, getAllPets, updatePet, deletePet } = require('../controllers/petController');




router.post('/pets', createPet);
router.get('/pets', getAllPets);
router.put('/pets/:id', updatePet);
router.delete('/pets/:id', deletePet);

module.exports = router;
