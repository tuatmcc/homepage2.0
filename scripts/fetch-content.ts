import fs from 'node:fs';
import { cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { clone } from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const CONTENT_REPO = 'https://github.com/tuatmcc/hp-md-content.git';
const MOCK_CONTENT_DIR = 'mock/content';
const TARGET_CONTENT_DIR = 'content';

// Move all images to public folder. This should be run before next build.
async function fetchContent() {
  // remove existing content folder
  await rm(TARGET_CONTENT_DIR, { recursive: true, force: true });

  // 環境変数 NODE_ENV が production の場合、実際のリポジトリから取得
  // それ以外の場合はモックデータを使用
  if (process.env.NODE_ENV === 'production') {
    // clone the content repo for production
    await clone({
      depth: 1,
      url: CONTENT_REPO,
      fs: fs,
      dir: path.join(process.cwd(), TARGET_CONTENT_DIR),
      http: http,
    });

    console.info('Successfully cloned content repo for production');
  } else {
    // For development/debug, copy mock content
    try {
      await cp(MOCK_CONTENT_DIR, TARGET_CONTENT_DIR, { recursive: true });
      console.info('Successfully copied mock content for development');
    } catch (error) {
      console.error('Error copying mock content:', error);
      console.warn(
        `Mock content directory '${MOCK_CONTENT_DIR}' might not exist or is empty.`,
      );

      // モックディレクトリが存在しない場合は空のcontentディレクトリを作成
      fs.mkdirSync(TARGET_CONTENT_DIR, { recursive: true });
    }
  }
}

fetchContent();
