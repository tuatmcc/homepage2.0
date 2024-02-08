import { cp, rm } from 'node:fs/promises';
import { glob } from 'glob';
import { simpleGit as git } from 'simple-git';

const CONTENT_REPO = 'https://github.com/tuatmcc/hp-md-content.git';

// Move all images to public folder. This should be run before next build.
async function fetchContent() {
  // remove existing content folder
  await rm('content', { recursive: true, force: true });

  // clone the content repo
  await git().clone(CONTENT_REPO, 'content', ['--depth', '1']);
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
