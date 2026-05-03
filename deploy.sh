#!/usr/bin/env bash
# deploy.sh — Build and deploy openbridge-www
#
# Usage:
#   ./deploy.sh            → deploy to production  (www.open-bridge.io)
#   ./deploy.sh beta       → deploy to beta         (beta.open-bridge.io)
#
# Requirements on the server:
#   - Node.js 20+ and npm
#   - /var/www/openbridge-www/      (production target)
#   - /var/www/openbridge-www-beta/ (beta target)
#   - Caddy running with the Caddyfile in this repo

set -euo pipefail

TARGET="${1:-production}"

PROD_DIR="/var/www/openbridge-www"
BETA_DIR="/var/www/openbridge-www-beta"

echo "▶ openbridge-www deploy — target: ${TARGET}"
echo ""

# ── 1. Pull latest code ──────────────────────────────────────────
echo "→ Pulling latest code..."
if [[ "$TARGET" == "beta" ]]; then
    git fetch origin
    git checkout beta
    git pull origin beta
else
    git fetch origin
    git checkout main
    git pull origin main
fi

# ── 2. Install dependencies ──────────────────────────────────────
echo "→ Installing dependencies..."
npm ci --silent

# ── 3. Build ────────────────────────────────────────────────────
echo "→ Building..."
npm run build

# ── 4. Deploy ───────────────────────────────────────────────────
if [[ "$TARGET" == "beta" ]]; then
    echo "→ Deploying to beta: ${BETA_DIR}/dist"
    mkdir -p "${BETA_DIR}"
    rsync -a --delete dist/ "${BETA_DIR}/dist/"
else
    echo "→ Deploying to production: ${PROD_DIR}/dist"
    mkdir -p "${PROD_DIR}"
    rsync -a --delete dist/ "${PROD_DIR}/dist/"
fi

echo ""
echo "✓ Done! Deployed to ${TARGET}."
if [[ "$TARGET" == "beta" ]]; then
    echo "  → https://beta.open-bridge.io"
else
    echo "  → https://www.open-bridge.io"
fi
