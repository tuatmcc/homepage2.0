import Link from 'next/link';

import Page from '../../components/common/Page/Page';
import { PostCollector, PostCollectorProps } from '../../lib/post-collector';

import { MetaData } from '~/components/types/meta';

const meta: MetaData = {
  title: '作品',
  description: 'Works of TUATMCC',
};

// posts will be populated at build time by getStaticProps()
const WorksPage = ({ posts }: PostCollectorProps) => {
  return (
    <Page meta={meta}>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`works/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </Page>
  );
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('works').getStaticProps;

export default WorksPage;
