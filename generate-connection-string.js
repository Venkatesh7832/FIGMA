#!/usr/bin/env node

// MongoDB Atlas Connection String Generator
console.log('🔗 MongoDB Atlas Connection String Generator\n');

// Get user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Please provide your MongoDB Atlas details:\n');

rl.question('1. Username (e.g., figma-user): ', (username) => {
  rl.question('2. Password (e.g., FigmaPassword123!): ', (password) => {
    rl.question('3. Cluster name (e.g., cluster0.abc123): ', (clusterName) => {
      rl.question('4. Database name (e.g., figma-assignment): ', (dbName) => {
        
        // Generate the connection string
        const connectionString = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority&authSource=admin`;
        
        console.log('\n✅ Your MongoDB Atlas Connection String:');
        console.log('='.repeat(80));
        console.log(connectionString);
        console.log('='.repeat(80));
        
        console.log('\n📋 Copy this string and use it as your MONGODB_URI environment variable in Render.');
        console.log('\n🔧 Render Environment Variable Setup:');
        console.log('1. Go to your Render service dashboard');
        console.log('2. Click "Environment" tab');
        console.log('3. Add/Update: MONGODB_URI = ' + connectionString);
        console.log('4. Click "Save Changes"');
        console.log('5. Your service will automatically redeploy');
        
        rl.close();
      });
    });
  });
});
