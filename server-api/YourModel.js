const mongoose = require('mongoose');

// Replace '<password>' with your actual MongoDB password
const dbUri = 'mongodb+srv://deepak54:deepak54@jwtauth.xx3rxxk.mongodb.net/';

// Additional options for the MongoDB connection (optional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Replace 'YourModel' with the name of your Mongoose model
// const YourModel = require('./YourModel');

// Connect to the MongoDB database
mongoose.connect(dbUri, options)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    // Your server startup code or additional logic can go here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
