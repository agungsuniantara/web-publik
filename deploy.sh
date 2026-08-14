#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VPS_USER="bali-vibes-tech"
VPS_HOST="103.196.152.242"
VPS_PATH="/home/bali-vibes-tech/web-publik"
REMOTE="${VPS_USER}@${VPS_HOST}"
APP_DOMAIN="https://umacoding.com"

# Check if script is running directly on the VPS
if [ -d "$VPS_PATH" ] && [ "$PROJECT_ROOT" = "$VPS_PATH" ]; then
    echo "======================================================"
    echo "📦 Executing Web Publik Tasks on VPS"
    echo "Directory: ${VPS_PATH}"
    echo "======================================================"

    export PATH=$PATH:/usr/local/bin:/usr/bin:/bin:~/.nvm/versions/node/$(ls ~/.nvm/versions/node 2>/dev/null | tail -n 1)/bin

    cd "$VPS_PATH"

    echo "📦 Installing NPM dependencies..."
    npm install

    echo "🏗️ Building Next.js production app..."
    npm run build

    echo "🔄 Restarting PM2 process..."
    pm2 restart web-publik || pm2 restart 0 || pm2 start npm --name "web-publik" -- start

    echo "======================================================"
    echo "✅ Web Publik VPS Tasks Completed Successfully!"
    echo "Live URL: ${APP_DOMAIN}"
    echo "======================================================"
    exit 0
fi

# Running from Local Machine
echo "======================================================"
echo "🚀 Deploying Web Publik to VPS"
echo "Target: ${REMOTE}:${VPS_PATH}"
echo "Domain: ${APP_DOMAIN}"
echo "======================================================"

echo "[deploy] 📤 Uploading local files to VPS via rsync..."
rsync -az --delete \
  -e "ssh -o StrictHostKeyChecking=no" \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.env.local' \
  --exclude '.env' \
  --exclude '.env.*' \
  --exclude '.DS_Store' \
  --exclude '*.pem' \
  --exclude 'id_rsa*' \
  "$PROJECT_ROOT/" "$REMOTE:$VPS_PATH/"

echo "[deploy] 📡 Executing deployment tasks on VPS via SSH..."
ssh -o StrictHostKeyChecking=no "$REMOTE" "bash '$VPS_PATH/deploy.sh'"

echo "======================================================"
echo "✅ Web Publik Deployed Successfully!"
echo "Live URL: ${APP_DOMAIN}"
echo "======================================================"
