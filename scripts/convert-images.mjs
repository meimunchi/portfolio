#!/usr/bin/env node

/**
 * Image Conversion & Web Optimization Tool
 *
 * Converts PNG, JPEG, and TIFF images to optimized WebP format with resolution
 * throttling to protect original artwork from unauthorized printing and reproduction.
 *
 * Usage:
 *   node scripts/convert-images.mjs <folder-path-or-file-paths> [options]
 *   npm run convert-images -- <folder-path-or-file-paths> [options]
 *
 * Examples:
 *   node scripts/convert-images.mjs public/images/panda_and_lion_additional
 *   node scripts/convert-images.mjs public/images/art1.png public/images/art2.jpg
 *   node scripts/convert-images.mjs public/images/heroSlides --max-size 1400 --quality 85
 *   node scripts/convert-images.mjs public/images/sketches --keep-original
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Disable Sharp file caching so Windows does not lock files during unlink
sharp.cache(false);

const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.tiff', '.tif', '.bmp']);

function printHelp() {
  console.log(`
\x1b[1m\x1b[36mArtwork Image Optimizer & WebP Converter\x1b[0m

\x1b[1mUsage:\x1b[0m
  node scripts/convert-images.mjs <target-folder-or-files...> [options]
  npm run convert-images -- <target-folder-or-files...> [options]

\x1b[1mOptions:\x1b[0m
  --max-size <px>    Maximum width/height in pixels (default: 1200)
  --quality <1-100>  WebP compression quality (default: 80)
  --keep-original    Keep original image files instead of replacing them
  --help, -h         Show this help message

\x1b[1mExamples:\x1b[0m
  # Recursively convert all images in a folder and its subfolders:
  npm run convert-images -- public/images/panda_and_lion_additional

  # Convert specific image files:
  npm run convert-images -- public/images/sample1.png public/images/sample2.jpeg

  # Custom size and quality:
  npm run convert-images -- public/images/gallery --max-size 1400 --quality 85
`);
}

// Parse command line arguments
function parseArgs(args) {
  let maxSize = 1200;
  let quality = 80;
  let keepOriginal = false;
  const targets = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else if (arg === '--max-size') {
      const val = parseInt(args[++i], 10);
      if (!isNaN(val) && val > 0) maxSize = val;
    } else if (arg === '--quality') {
      const val = parseInt(args[++i], 10);
      if (!isNaN(val) && val > 0 && val <= 100) quality = val;
    } else if (arg === '--keep-original') {
      keepOriginal = true;
    } else if (!arg.startsWith('-')) {
      targets.push(arg);
    }
  }

  return { targets, maxSize, quality, keepOriginal };
}

// Recursively find all supported image files in a directory
function collectFilesFromDirectory(dirPath) {
  let results = [];
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(collectFilesFromDirectory(fullPath));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`\x1b[31mError accessing directory:\x1b[0m ${dirPath}`, err.message);
  }
  return results;
}

// Collect all target files from provided folders or file arguments
function collectAllFiles(targets) {
  const files = [];

  for (const target of targets) {
    const resolvedPath = path.resolve(target);
    if (!fs.existsSync(resolvedPath)) {
      console.warn(`\x1b[33mWarning: Path not found:\x1b[0m ${target}`);
      continue;
    }

    const stat = fs.statSync(resolvedPath);
    if (stat.isDirectory()) {
      files.push(...collectFilesFromDirectory(resolvedPath));
    } else if (stat.isFile()) {
      const ext = path.extname(resolvedPath).toLowerCase();
      if (SUPPORTED_EXTENSIONS.has(ext)) {
        files.push(resolvedPath);
      } else {
        console.warn(`\x1b[33mWarning: Unsupported image format (${ext}):\x1b[0m ${target}`);
      }
    }
  }

  // Deduplicate files
  return Array.from(new Set(files));
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function convertImage(filePath, { maxSize, quality, keepOriginal }) {
  const originalStat = fs.statSync(filePath);
  const inputBuffer = fs.readFileSync(filePath);
  const metadata = await sharp(inputBuffer).metadata();

  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  // Resize so largest dimension doesn't exceed maxSize (maintains aspect ratio, never enlarges)
  await sharp(inputBuffer)
    .resize({
      width: maxSize,
      height: maxSize,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);

  const newStat = fs.statSync(outputPath);
  const newMetadata = await sharp(outputPath).metadata();

  // If successfully created and user didn't ask to keep originals (and original wasn't webp)
  if (!keepOriginal && parsed.ext.toLowerCase() !== '.webp') {
    fs.unlinkSync(filePath);
  }

  const reduction = ((1 - newStat.size / originalStat.size) * 100).toFixed(1);

  return {
    file: path.relative(process.cwd(), outputPath),
    originalRes: `${metadata.width} × ${metadata.height}`,
    newRes: `${newMetadata.width} × ${newMetadata.height}`,
    originalSize: originalStat.size,
    newSize: newStat.size,
    reduction: `${reduction}%`
  };
}

async function main() {
  const { targets, maxSize, quality, keepOriginal } = parseArgs(process.argv.slice(2));

  if (targets.length === 0) {
    printHelp();
    process.exit(1);
  }

  const files = collectAllFiles(targets);

  if (files.length === 0) {
    console.log('\x1b[33mNo eligible images found to convert.\x1b[0m');
    process.exit(0);
  }

  console.log(`\n\x1b[1mProcessing ${files.length} image(s)\x1b[0m (max dimension: ${maxSize}px, WebP quality: ${quality}%)...\n`);

  const results = [];
  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of files) {
    try {
      const info = await convertImage(file, { maxSize, quality, keepOriginal });
      totalOriginal += info.originalSize;
      totalNew += info.newSize;
      results.push({
        'Output File': info.file,
        'Original Res': info.originalRes,
        'Optimized Res': info.newRes,
        'Original Size': formatBytes(info.originalSize),
        'WebP Size': formatBytes(info.newSize),
        'Savings': info.reduction
      });
    } catch (err) {
      console.error(`\x1b[31mFailed to convert:\x1b[0m ${file}`, err.message);
    }
  }

  console.table(results);

  const totalSaved = totalOriginal - totalNew;
  const overallReduction = ((totalSaved / totalOriginal) * 100).toFixed(1);

  console.log(`\x1b[32m✔ Successfully converted ${results.length} image(s)!\x1b[0m`);
  console.log(`  Total size before: \x1b[1m${formatBytes(totalOriginal)}\x1b[0m`);
  console.log(`  Total size after:  \x1b[1m${formatBytes(totalNew)}\x1b[0m`);
  console.log(`  Total space saved: \x1b[32m\x1b[1m${formatBytes(totalSaved)} (${overallReduction}% reduction)\x1b[0m\n`);
}

main().catch(err => {
  console.error('\x1b[31mFatal error:\x1b[0m', err);
  process.exit(1);
});
