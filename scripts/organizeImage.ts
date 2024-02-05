import { cp } from 'node:fs/promises';

import { glob } from 'glob';

// Move all images to public folder. This should be run before next build.
async function moveAllImage() {
  const files = await glob('**/*.{html,jpg,jpeg,png,gif,svg,webp,avif}', {
    cwd: 'content',
  });

  for (const file of files) {
    try {
      await cp(`content/${file}`, `public/${file}`);
    } catch (e) {
      console.error(e);
    }
  }
}

moveAllImage();
