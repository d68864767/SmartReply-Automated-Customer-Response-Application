// Import required modules
const express = require('express');
const router = express.Router();

// Import the response controller
const responseController = require('../controllers/responseController');

// Route for the home page
router.get('/', (req, res) => {
  res.render('index');
});

// Route for the dashboard page
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Route for generating a response
router.post('/response', responseController.generateResponse);

module.exports = router;
