#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VPS_USER="bali-vibes-tech"
VPS_HOST="103.196.152.242"
VPS_PATH="/home/bali-vibes-tech/web-publik"
REMOTE="${VPS_USER}@${VPS_HOST}"

echo "======================================================"
echo "🚀 Local Direct Deployment for Sistem 2 (Web Publik)"
echo "Target: ${REMOTE}:${VPS_PATH}"
echo "Domain: https://umacoding.com"
echo "Port: 3003"
echo "======================================================"

echo "[deploy] 📦 Packaging files for upload..."
tar -czf ../deploy.tar.gz --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='.env' --exclude='.env.*' --exclude='.DS_Store' --exclude='id_rsa_web_dev' -C "${PROJECT_ROOT}" .

echo "[deploy] 📤 Uploading web-publik files to VPS..."
rsync -avz ../deploy.tar.gz "${REMOTE}:${VPS_PATH}/deploy.tar.gz"

echo "[deploy] 📦 Extracting files on VPS..."
ssh "${REMOTE}" "cd ${VPS_PATH} && tar -xzf deploy.tar.gz && rm deploy.tar.gz"
rm -f ../deploy.tar.gz

echo "[deploy] 📡 Executing build & PM2 restart on VPS..."
ssh "${REMOTE}" "bash -s" << 'EOF'
  set -e
  echo "[VPS] 📦 Installing dependencies..."
  cd /home/bali-vibes-tech/web-publik
  npm install --production=false

  echo "[VPS] 🏗️ Building Next.js application..."
  npm run build

  echo "[VPS] 🔄 Restarting PM2 process web-publik..."
  pm2 restart web-publik || pm2 restart 0

  echo "======================================================"
  echo "🎉 Sistem 2 Deployment Finished Successfully!"
  echo "======================================================"
EOF
