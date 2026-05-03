#!/usr/bin/env bash
# promote.sh — Promote beta to production
#
# This script copies the current beta build directly to production
# WITHOUT rebuilding — so exactly what you tested goes live.
#
# Usage:  ./promote.sh

set -euo pipefail

PROD_DIR="/var/www/openbridge-www"
BETA_DIR="/var/www/openbridge-www-beta"

if [[ ! -d "${BETA_DIR}/dist" ]]; then
    echo "✗ No beta build found at ${BETA_DIR}/dist"
    echo "  Run ./deploy.sh beta first."
    exit 1
fi

echo "▶ Promoting beta → production"
echo ""

read -rp "  Are you sure? This will replace production. [y/N] " confirm
[[ "${confirm}" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }

mkdir -p "${PROD_DIR}"
rsync -a --delete "${BETA_DIR}/dist/" "${PROD_DIR}/dist/"

echo ""
echo "✓ Beta promoted to production."
echo "  → https://www.open-bridge.io"
