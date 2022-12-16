import Link from 'next/link';
import { FC } from 'react';

import Page from '../../components/common/Page/Page';
import { PostCollector, PostCollectorProps } from '../../lib/post-collector';

const meta = {
  title: '活動報告',
  description: 'Activities of TUATMCC',
};

type ActivitiesProps = {
  posts: PostCollectorProps;
};

// posts will be populated at build time by getStaticProps()
const ActivitiesPage: FC<PostCollectorProps> = ({ posts }) => {
  return (
    <Page meta={meta}>
      <h1>活動報告</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`activities/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </Page>
  );
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('activities').getStaticProps;

export default ActivitiesPage;
