import { join } from 'path';

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
  } else if (imagePath.startsWith('.')) {
    return join(rootPath.replace(/^\//, ''), imagePath);
  } else {
    return imagePath;
  }
};
