#!/bin/bash
set -e

cd "$(dirname "$0")"

git config --global --add safe.directory '*' || true

echo "🚀 Pulling latest web-publik from GitHub..."
git fetch https://github.com/agungsuniantara/web-publik.git main
git reset --hard FETCH_HEAD

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js production app..."
npm run build

echo "🔄 Restarting PM2 process..."
pm2 restart web-publik || pm2 restart 0

echo "✅ Web Publik successfully deployed!"
