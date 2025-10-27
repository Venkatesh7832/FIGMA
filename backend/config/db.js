const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is properly set
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set. Please set it to your MongoDB Atlas connection string.');
    }

    // Validate that the URI looks like a proper MongoDB connection string
    if (!process.env.MONGODB_URI.includes('mongodb://') && !process.env.MONGODB_URI.includes('mongodb+srv://')) {
      throw new Error('MONGODB_URI must be a valid MongoDB connection string starting with mongodb:// or mongodb+srv://');
    }

    // Check for placeholder values in the connection string
    if (process.env.MONGODB_URI.includes('xxxxx') || process.env.MONGODB_URI.includes('username') || process.env.MONGODB_URI.includes('password')) {
      throw new Error('MONGODB_URI contains placeholder values. Please replace with your actual MongoDB Atlas credentials.');
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    console.error('Please ensure you have set the MONGODB_URI environment variable with a valid MongoDB Atlas connection string.');
    console.error('Example: mongodb+srv://yourusername:yourpassword@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin');
    process.exit(1);
  }
};

module.exports = connectDB;
