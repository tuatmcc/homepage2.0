export type ROUTE = {
  PATH: string;
  LABEL: string;
};

export const ROUTES = {
  HOME: { PATH: '/home', LABEL: 'Home' },
  ABOUT: { PATH: '/about', LABEL: 'About' },
  NEWS: { PATH: '/news', LABEL: 'News' },
  ACTIVITIES: { PATH: '/activities', LABEL: 'Activities' },
  ACTIVITIES_DISCORD_TUTORIAL: {
    PATH: '/activities/discord-tutorial',
    LABEL: 'Discord Tutorial',
  },
  WORKS: { PATH: '/works', LABEL: 'Works' },
  LINKS: { PATH: '/links', LABEL: 'Links' },
};

export const BASE_ROUTES_LIST = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.NEWS, ROUTES.ACTIVITIES, ROUTES.WORKS, ROUTES.LINKS];

export const ACTIVITIES_ROUTES_LIST = [];
