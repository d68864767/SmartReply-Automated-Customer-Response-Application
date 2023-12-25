// Import required modules
const mongoose = require('mongoose');

// Define the schema for a response
const ResponseSchema = new mongoose.Schema({
  inquiry: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Compile the schema into a model
const Response = mongoose.model('Response', ResponseSchema);

// Export the model
module.exports = Response;
