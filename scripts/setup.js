#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Voxel Portfolio...\n');

// Create .env.local file
const envContent = `# Voxel Portfolio Environment Variables
NEXT_PUBLIC_SITE_URL=https://voxel-portfolio.vercel.app
NEXT_PUBLIC_EMAIL=voxelperfect47@gmail.com
NEXT_PUBLIC_GITHUB=https://github.com/voxel
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/voxel
`;

fs.writeFileSync('.env.local', envContent);
console.log('✅ Created .env.local file');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
  console.log('✅ Created public directory');
}

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
console.log('\nFor deployment:');
console.log('1. Push to GitHub');
console.log('2. Connect to Vercel');
console.log('3. Deploy automatically!');
