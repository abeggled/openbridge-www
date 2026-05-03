#!/usr/bin/env node
/**
 * Translate German docs → English using the Claude API.
 *
 * Usage:
 *   node scripts/translate-docs.mjs              # translate all new/changed docs
 *   node scripts/translate-docs.mjs --force      # re-translate everything
 *
 * Requires: ANTHROPIC_API_KEY environment variable
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { existsSync, statSync } from 'fs';

const DE_DIR = 'src/content/docs/de';
const EN_DIR = 'src/content/docs/en';
const FORCE = process.argv.includes('--force');

const client = new Anthropic();

async function translateDoc(deContent) {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    system: `You are a precise technical translator specialising in software documentation.
Translate German Markdown documentation into natural, technical English.
Rules:
- Keep ALL Markdown formatting exactly as-is (headings, code blocks, lists, links, images)
- Keep all frontmatter keys as-is; translate only the frontmatter VALUES (title, description)
- Keep all code examples and file paths unchanged
- In internal links (starting with /de/), replace /de/ with /en/ — e.g. /de/docs/foo → /en/docs/foo
- Translate only human-readable prose and UI text
- Output only the translated Markdown — no preamble, no explanation`,
    messages: [
      {
        role: 'user',
        content: deContent,
      },
    ],
  });

  return message.content[0].text;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is not set.');
    process.exit(1);
  }

  await fs.mkdir(EN_DIR, { recursive: true });

  const files = (await fs.readdir(DE_DIR)).filter(f => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('No German docs found in', DE_DIR);
    return;
  }

  let translated = 0;
  let skipped = 0;

  for (const file of files) {
    const dePath = path.join(DE_DIR, file);
    const enPath = path.join(EN_DIR, file);

    if (!FORCE && existsSync(enPath)) {
      const deMtime = statSync(dePath).mtimeMs;
      const enMtime = statSync(enPath).mtimeMs;
      if (enMtime >= deMtime) {
        console.log(`  skip  ${file}  (EN is up-to-date)`);
        skipped++;
        continue;
      }
    }

    console.log(`  translate  ${file} …`);
    const deContent = await fs.readFile(dePath, 'utf-8');

    try {
      const enContent = await translateDoc(deContent);
      await fs.writeFile(enPath, enContent, 'utf-8');
      console.log(`  ✓  ${file} → en/${file}`);
      translated++;
    } catch (err) {
      console.error(`  ✗  ${file} — ${err.message}`);
    }
  }

  console.log(`\nDone. ${translated} translated, ${skipped} skipped.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
