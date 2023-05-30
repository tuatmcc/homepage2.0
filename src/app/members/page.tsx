import { FC } from 'react';

import styles from './style.module.css';

import type { Metadata } from 'next';

import { allPosts } from '.mdorganizer';
import { Navbar } from '~/components/Navbar';
import { BasicLink } from '~/components/ui/BasicLink';
import { Footer } from '~/components/ui/Footer';

const documentType = 'members';

export const metadata: Metadata = {
  title: 'Members',
  description: '農工大公認サークルMCCのブログ記事の一覧です',
};

const MemberListPage: FC = () => {
  const members = structuredClone(allPosts)
    .filter(
      (x, i, self) =>
        x.author && self.findIndex((t) => t.author === x.author) === i,
    )
    .map((x) => x.author);
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Members</h1>
          <h2 className={styles.headerSubTitle}>記事を書いてくれた部員たち</h2>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <ul className={styles.list}>
            {members.map((member) => {
              return (
                <li className={styles.listItem} key={member}>
                  <BasicLink
                    href={`${documentType}/${member}`}
                    className={styles.link}
                  >
                    {member}
                  </BasicLink>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MemberListPage;
