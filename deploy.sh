#!/bin/bash
# deploy.sh — Build and deploy openbridge-www
#
# Usage:
#   ./deploy.sh            → deploy to production  (www.open-bridge.io)
#   ./deploy.sh beta       → deploy to beta         (beta.www.open-bridge.io)

set -euo pipefail

TARGET="${1:-production}"

PROD_DIR="/var/www/openbridge-www"
BETA_DIR="/var/www/openbridge-www-beta"

echo "▶ openbridge-www deploy — target: ${TARGET}"
echo ""

# ── 1. Pull latest code ──────────────────────────────────────────
echo "→ Pulling latest code..."
git fetch origin

if [ "$TARGET" = "beta" ]; then
    if git show-ref --quiet refs/heads/beta; then
        git checkout beta
    else
        git checkout -b beta origin/beta
    fi
    git pull origin beta
else
    if git show-ref --quiet refs/heads/main; then
        git checkout main
    else
        git checkout -b main origin/main
    fi
    git pull origin main
fi

# ── 2. Install dependencies ──────────────────────────────────────
echo "→ Installing dependencies..."
npm ci --silent

# ── 3. Build ────────────────────────────────────────────────────
echo "→ Building..."
npm run build

# ── 4. Deploy ───────────────────────────────────────────────────
if [ "$TARGET" = "beta" ]; then
    DEST="${BETA_DIR}"
    echo "→ Deploying to beta: ${DEST}/dist"
else
    DEST="${PROD_DIR}"
    echo "→ Deploying to production: ${DEST}/dist"
fi

mkdir -p "${DEST}"
rm -rf "${DEST}/dist"
cp -r dist "${DEST}/dist"

echo ""
echo "✓ Done! Deployed to ${TARGET}."
if [ "$TARGET" = "beta" ]; then
    echo "  → https://beta.www.open-bridge.io"
else
    echo "  → https://www.open-bridge.io"
fi
