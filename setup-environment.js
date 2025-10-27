#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up environment configuration...\n');

// Get user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Please provide your MongoDB Atlas credentials:\n');

rl.question('Database Username: ', (username) => {
  rl.question('Database Password: ', (password) => {
    
    // Create backend .env file
    const backendEnv = `PORT=5000
MONGODB_URI=mongodb+srv://${username}:${password}@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
NODE_ENV=development`;

    // Create frontend .env file
    const frontendEnv = `REACT_APP_API_URL=http://localhost:5000`;

    try {
      // Write backend .env file
      fs.writeFileSync(path.join(__dirname, 'backend', '.env'), backendEnv);
      console.log('✅ Created backend/.env file');

      // Write frontend .env file
      fs.writeFileSync(path.join(__dirname, 'frontend', '.env'), frontendEnv);
      console.log('✅ Created frontend/.env file');

      console.log('\n🎉 Environment setup complete!');
      console.log('\n📋 Your MongoDB connection string:');
      console.log(`mongodb+srv://${username}:${password}@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`);
      
      console.log('\n🚀 You can now run:');
      console.log('npm start');
      
      console.log('\n🌐 For Render deployment, use this as your MONGODB_URI environment variable:');
      console.log(`mongodb+srv://${username}:${password}@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`);

    } catch (error) {
      console.error('❌ Error creating environment files:', error.message);
      console.log('\n📝 Manual setup required:');
      console.log('\n1. Create backend/.env with:');
      console.log(backendEnv);
      console.log('\n2. Create frontend/.env with:');
      console.log(frontendEnv);
    }

    rl.close();
  });
});
