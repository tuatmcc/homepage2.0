import fs from 'node:fs';
import { cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';
import { clone } from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const CONTENT_REPO = 'https://github.com/tuatmcc/hp-md-content.git';

// Move all images to public folder. This should be run before next build.
async function fetchContent() {
  // remove existing content folder
  await rm('content', { recursive: true, force: true });

  // clone the content repo
  await clone({
    depth: 1,
    url: CONTENT_REPO,
    fs: fs,
    dir: path.join(process.cwd(), 'content'),
    http: http,
  });

  console.info('Successfully cloned content repo');

  // move all images to public folder
  const files = await glob('**/*.{html,jpg,jpeg,png,gif,svg,webp,avif}', {
    cwd: 'content',
  });

  for (const file of files) {
    try {
      cp(`content/${file}`, `public/${file}`);
    } catch (e) {
      console.error(e);
    }
  }
  console.info('Successfully moved all images to public/ folder');
}

fetchContent();
