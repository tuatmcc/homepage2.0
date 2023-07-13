import { cp } from 'fs/promises';

import { glob } from 'glob';

// Move all images to public folder. This should be run before next build.
async function moveAllImage() {
  const files = await glob('**/*.{html,jpg,jpeg,png,gif,svg,webp,avif}', {
    cwd: 'content',
  });
  files.forEach(async (filePath) => {
    try {
      await cp(`content/${filePath}`, `public/${filePath}`);
    } catch (e) {
      console.log(e);
    }
  });
}

moveAllImage();
