#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Figma Assignment Full-Stack Application...\n');

// Function to start a process
function startProcess(name, command, cwd) {
  console.log(`📦 Starting ${name}...`);
  
  const process = spawn(command, [], {
    cwd: cwd,
    shell: true,
    stdio: 'inherit'
  });

  process.on('error', (error) => {
    console.error(`❌ Error starting ${name}:`, error.message);
  });

  process.on('exit', (code) => {
    if (code !== 0) {
      console.error(`❌ ${name} exited with code ${code}`);
    }
  });

  return process;
}

// Check if we're in production (Render deployment)
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  // In production, only start the backend
  console.log('🌐 Production mode: Starting backend only');
  startProcess('Backend', 'npm start', path.join(__dirname, 'backend'));
} else {
  // In development, start both backend and frontend
  console.log('🔧 Development mode: Starting both backend and frontend');
  
  const backendProcess = startProcess('Backend', 'npm start', path.join(__dirname, 'backend'));
  
  // Wait a bit for backend to start, then start frontend
  setTimeout(() => {
    startProcess('Frontend', 'npm start', path.join(__dirname, 'frontend'));
  }, 3000);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down...');
  process.exit(0);
});
