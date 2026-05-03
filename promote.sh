#!/bin/sh
# promote.sh — Promote beta to production
#
# Copies the current beta build directly to production
# WITHOUT rebuilding — so exactly what you tested goes live.
#
# Usage:  ./promote.sh

set -eu

PROD_DIR="/var/www/openbridge-www"
BETA_DIR="/var/www/openbridge-www-beta"

if [ ! -d "${BETA_DIR}/dist" ]; then
    echo "✗ No beta build found at ${BETA_DIR}/dist"
    echo "  Run ./deploy.sh beta first."
    exit 1
fi

echo "▶ Promoting beta → production"
echo ""
printf "  Are you sure? This will replace production. [y/N] "
read -r confirm
case "$confirm" in
    [Yy]*) ;;
    *) echo "Aborted."; exit 0 ;;
esac

mkdir -p "${PROD_DIR}"
rm -rf "${PROD_DIR}/dist"
cp -r "${BETA_DIR}/dist" "${PROD_DIR}/dist"

echo ""
echo "✓ Beta promoted to production."
echo "  → https://www.open-bridge.io"
