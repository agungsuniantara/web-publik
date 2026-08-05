#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VPS_USER="web-dev"
VPS_HOST="103.196.152.242"
VPS_PATH="/home/web-dev/webpublik"
REMOTE="${VPS_USER}@${VPS_HOST}"

echo "======================================================"
echo "🚀 Local Direct Deployment for Sistem 2 (Web Publik)"
echo "Target: ${REMOTE}:${VPS_PATH}"
echo "Domain: https://umacoding.com"
echo "Port: 3002"
echo "======================================================"

echo "[deploy] 📤 Uploading web-publik files to VPS..."
rsync -az --delete \
  -e "ssh -i ./id_rsa_web_dev -o StrictHostKeyChecking=no" \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.env' \
  --exclude '.env.*' \
  --exclude '.DS_Store' \
  --exclude 'id_rsa_web_dev' \
  "${PROJECT_ROOT}/" "${REMOTE}:${VPS_PATH}/"

echo "[deploy] 📡 Executing build & PM2 restart on VPS..."
ssh -i ./id_rsa_web_dev -o StrictHostKeyChecking=no "${REMOTE}" "bash -s" << 'EOF'
  set -e
  echo "[VPS] 📦 Installing dependencies..."
  cd /home/web-dev/webpublik
  npm install --production=false

  echo "[VPS] 🏗️ Building Next.js application..."
  npm run build

  echo "[VPS] 🔄 Restarting PM2 process..."
  pm2 restart webpublik || pm2 start npm --name "webpublik" -- run start

  echo "======================================================"
  echo "🎉 Sistem 2 Deployment Finished Successfully!"
  echo "======================================================"
EOF
