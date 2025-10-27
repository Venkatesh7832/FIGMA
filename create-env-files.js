#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Creating environment files...\n');

// Your MongoDB Atlas connection string
const username = '<db_username>'; // Replace with your actual username
const password = '<db_password>'; // Replace with your actual password

// Create backend .env content
const backendEnv = `PORT=5000
MONGODB_URI=mongodb+srv://${username}:${password}@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
NODE_ENV=development`;

// Create frontend .env content
const frontendEnv = `REACT_APP_API_URL=http://localhost:5000`;

try {
  // Write backend .env file
  fs.writeFileSync(path.join(__dirname, 'backend', '.env'), backendEnv);
  console.log('✅ Created backend/.env file');

  // Write frontend .env file
  fs.writeFileSync(path.join(__dirname, 'frontend', '.env'), frontendEnv);
  console.log('✅ Created frontend/.env file');

  console.log('\n🎉 Environment files created!');
  console.log('\n⚠️  IMPORTANT: Replace <db_username> and <db_password> with your actual MongoDB Atlas credentials in backend/.env');
  
  console.log('\n📋 Your complete MongoDB connection string:');
  console.log(`mongodb+srv://${username}:${password}@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`);
  
  console.log('\n🚀 You can now run:');
  console.log('npm start');
  
  console.log('\n🌐 For Render deployment:');
  console.log('Use the connection string above as your MONGODB_URI environment variable');

} catch (error) {
  console.error('❌ Error creating environment files:', error.message);
}
