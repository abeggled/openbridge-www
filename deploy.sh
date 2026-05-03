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
    echo "→ Cleaning working tree..."
    git checkout -- .
    git clean -fd

    echo "→ Updating from main..."
    git fetch origin
    git checkout main
    git pull origin main

    echo "→ Now on: $(git log --oneline -1)"
    # Re-exec the freshly pulled script from main
    exec sh "$0" "$TARGET" "checkout"
    ;;

  checkout)
    if [ "$TARGET" = "beta" ]; then
      echo "→ Checking out beta branch..."
      if git show-ref --quiet refs/heads/beta; then
        git checkout beta
      else
        git checkout -b beta origin/beta
      fi
      git pull origin beta
    fi

    echo "→ Deploying commit: $(git log --oneline -1)"

    echo "→ Installing dependencies..."
    npm ci

    echo "→ Building..."
    npm run build

    if [ "$TARGET" = "beta" ]; then
      DEST="$BETA_DIR"
    else
      DEST="$PROD_DIR"
    fi

    echo "→ Copying dist to ${DEST}/dist ..."
    mkdir -p "$DEST"
    rm -rf "${DEST}/dist"
    cp -r dist "${DEST}/dist"

    echo "→ Files in ${DEST}/dist:"
    ls "${DEST}/dist"

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
