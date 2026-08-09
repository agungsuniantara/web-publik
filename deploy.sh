#!/bin/bash
set -e

echo "🚀 Pulling latest web-publik from GitHub..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js production app..."
npm run build

echo "🔄 Restarting PM2 process..."
pm2 restart web-publik || pm2 restart 0

echo "✅ Web Publik successfully deployed!"
