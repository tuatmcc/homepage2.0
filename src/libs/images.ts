import { glob } from 'glob';

async function moveAllImage() {
  // jpg, jpeg, png, gif, svg
  const files = await glob('**/*.webp');
  console.log(files);
}

moveAllImage();
