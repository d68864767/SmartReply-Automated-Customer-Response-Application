// Import required modules
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// OpenAI API endpoint
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// OpenAI API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Response controller
const responseController = {};

// Function to generate a response
responseController.generateResponse = async (req, res) => {
  try {
    // Get the customer inquiry from the request body
    const { inquiry } = req.body;

    // Set the headers for the OpenAI API request
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    // Set the data for the OpenAI API request
    const data = {
      'prompt': inquiry,
      'max_tokens': 60
    };

    // Make a POST request to the OpenAI API
    const response = await axios.post(OPENAI_API_URL, data, { headers });

    // Get the generated response from the OpenAI API response
    const generatedResponse = response.data.choices[0].text.trim();

    // Send the generated response
    res.json({ response: generatedResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating a response.' });
  }
};

module.exports = responseController;
