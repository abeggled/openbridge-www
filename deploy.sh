#!/bin/sh
# deploy.sh — Build and deploy openbridge-www
#
# Usage:
#   ./deploy.sh            → deploy to production  (www.open-bridge.io)
#   ./deploy.sh beta       → deploy to beta         (beta.www.open-bridge.io)

set -eu

TARGET="${1:-production}"
STEP="${2:-bootstrap}"

PROD_DIR="/var/www/openbridge-www"
BETA_DIR="/var/www/openbridge-www-beta"

echo "▶ openbridge-www deploy — target: ${TARGET}"
echo ""

case "$STEP" in

  bootstrap)
    # Always fetch and update main first — deploy scripts live on main
    echo "→ Updating deploy scripts from main..."
    git fetch origin
    git checkout main
    git pull origin main
    # Re-exec the freshly pulled script from main
    exec sh "$0" "$TARGET" "checkout"
    ;;

  checkout)
    # Checkout the target branch for website content
    if [ "$TARGET" = "beta" ]; then
        echo "→ Checking out beta branch..."
        if git show-ref --quiet refs/heads/beta; then
            git checkout beta
        else
            git checkout -b beta origin/beta
        fi
        git pull origin beta
    fi
    # Fall through to build
    echo "→ Installing dependencies..."
    npm ci --silent

    echo "→ Building..."
    npm run build

    if [ "$TARGET" = "beta" ]; then
        DEST="$BETA_DIR"
        echo "→ Deploying to beta: ${DEST}/dist"
    else
        DEST="$PROD_DIR"
        echo "→ Deploying to production: ${DEST}/dist"
    fi

    mkdir -p "$DEST"
    rm -rf "${DEST}/dist"
    cp -r dist "${DEST}/dist"

    # Always return to main so deploy scripts stay current
    git checkout main

    echo ""
    echo "✓ Done! Deployed to ${TARGET}."
    if [ "$TARGET" = "beta" ]; then
        echo "  → https://beta.www.open-bridge.io"
    else
        echo "  → https://www.open-bridge.io"
    fi
    ;;

esac
