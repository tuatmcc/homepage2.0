import { pagesPath } from '~/utils/$path';

type Route = {
  path: string;
  label: string;
};

/** ナビゲーションに使用するパスリスト */
export const navigationRoutes: Route[] = [
  { label: 'Home', path: pagesPath.$url().pathname },
  { label: 'AboutUs', path: '/about' },
  { label: 'News', path: pagesPath.news.$url().pathname },
  { label: 'Blog', path: pagesPath.blog.$url().pathname },
];
