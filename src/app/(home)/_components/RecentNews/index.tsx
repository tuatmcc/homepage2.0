'use client';

import type { FC } from 'react';
import tw from 'twin.macro';

import { allNewsDocuments } from '@/content';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';
import { orbitron } from '~/app/fonts';

export const RecentNews: FC = () => {
  const recentNews = allNewsDocuments
    .sort((a, b) => b.fields.date.localeCompare(a.fields.date))
    .slice(0, 4);

  return (
    <div className="w-full flex max-w-[1200px] mx-auto mt-12 relative justify-end">
      <motion.div
        className="flex flex-col w-[600px] max-w-full p-8 pb-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div
          className="absolute w-full bg-blue-600 left-0 top-[-120px] bottom-[400px] z-[-1]"
          style={{
            clipPath: `polygon(
            0 0, 0 calc(100% - 30px), 200px calc(100% - 30px), 230px 100%, calc(100% - 90px) 100%, 100% calc(100% - 90px), 100% 40px, calc(100% - 40px) 0
)`,
          }}
          variants={{
            hidden: {
              backgroundColor: 'var(--color-gray-100)',
            },
            visible: {
              bottom: '0px',
              backgroundColor: 'var(--color-blue-600)',
              transition: {
                duration: 1.2,
              },
            },
          }}
        />
        <motion.h2
          className={classNames(
            orbitron.className,
            'text-4xl font-bold tracking-wide pl-4 mb-8 text-gray-900',
          )}
          variants={{
            visible: {
              color: 'var(--color-gray-100)',
            },
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Recent <span className="text-yellow-500">N</span>
          ews
        </motion.h2>
        <ul className="list-none pl-6 flex flex-col gap-2 mb-6">
          {recentNews.map((news) => (
            <li key={news.rootPath} className="mb-2 text-gray-100">
              <a
                href={news.rootPath.replace(/^content|\/index\.mdx?/g, '')}
                className="flex items-center gap-4"
              >
                <p
                  className={classNames(
                    'text-xs font-bold tracking-wider min-w-[80px]',
                  )}
                >
                  {news.fields.date}
                </p>
                <h3 className="">{news.fields.title}</h3>
              </a>
            </li>
          ))}
        </ul>
        <Link
          href="/news"
          className={classNames(
            orbitron.className,
            'flex items-center gap-2 text-gray-100 pr-12 font-bold tracking-wider self-end',
          )}
        >
          <FaPlus />
          ALL NEWS
        </Link>
      </motion.div>
    </div>
  );
};
