import { join } from 'node:path';

/**
 * convert path to https://raw.githubusercontent.com/tuatmcc/**. no fallback.
 * @param src image's src attiributes from markdown file.
 */
export const parseImageSrc = (
  rootPath: string,
  imagePath?: string,
): string | undefined => {
  if (!imagePath) {
    return imagePath;
  }
  if (imagePath.startsWith('.')) {
    return join(rootPath.replace(/^\//, ''), imagePath);
  }
  return imagePath;
};
