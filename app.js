// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
const responseController = require('./controllers/responseController');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use express static middleware for serving static files
app.use(express.static('public'));

// Use the index router for the root path
app.use('/', indexRouter);

// Use the response controller for the '/response' path
app.use('/response', responseController);

// Set the port from the environment variables
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`SmartReply app listening at http://localhost:${port}`);
});

module.exports = app;
