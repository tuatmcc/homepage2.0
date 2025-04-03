import type { FC } from 'react';

import { allNewsDocuments } from '@/content';
import classNames from 'classnames';
import { orbitron } from '~/app/fonts';

export const RecentNews: FC = () => {
  const recentNews = allNewsDocuments
    .sort((a, b) => b.fields.date.localeCompare(a.fields.date))
    .slice(0, 4);

  return (
    <div className="w-full flex max-w-[1200px] mx-auto mt-24 relative justify-end">
      <div className="flex flex-col w-[600px] max-w-full p-8 relative">
        <div className="absolute w-[1px] h-[600px] left-0 bottom-0 z-0" />
        <h2
          className={classNames(
            orbitron.className,
            'text-4xl font-bold mb-4 pl-4',
          )}
        >
          Recent <span className="text-yellow-500">N</span>
          ews
        </h2>
        <ul className="list-none pl-6">
          {recentNews.map((news) => (
            <li key={news.rootPath} className="mb-2">
              <a
                href={news.rootPath.replace(/^content|\/index\.mdx?/g, '')}
                className="hover:underline"
              >
                <h3 className="text-lg font-semibold">{news.fields.title}</h3>
                <p
                  className={classNames(
                    orbitron.className,
                    'text-sm tracking-wide text-gray-500',
                  )}
                >
                  {news.fields.date}
                </p>
                <p className="text-sm">{news.fields.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
