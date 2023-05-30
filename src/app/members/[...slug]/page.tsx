import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allPosts, allMember } from '.mdorganizer';
import { Navbar } from '~/components/Navbar';
import { parseOgImage } from '~/libs/parseOgImage';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  metadataBase,
} from '~/libs/sharedmetadata';

type Params = { slug: string[] }; // [...slug]
const documentType = 'members';

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const post = allMember.find(
    (x) =>
      x.rootPath.replace(/content\/members\/|\/index.md/, '') ===
      params.slug.join('/'),
  );

  const ogImage = parseOgImage(post?.img ?? '', documentType);
  return {
    metadataBase: metadataBase,
    title: post?.title,
    description: post?.description,
    openGraph: {
      ...defaultOpenGraph,
      title: { default: post?.title ?? '', template: '%s | Members' },
      description: post?.description,
      images: [
        {
          ...defaultOpenGraphImage,
          url: encodeURI(ogImage),
        },
      ],
    },
  };
};

const MemberProfilePage: FC<{ params: { slug: string[] } }> = ({ params }) => {
  const member = structuredClone(allPosts)
    .filter(
      (x, i, self) => self.indexOf(x) === i && x.author === params.slug[0],
    )
    .map((x) => x.author);
  const markdown = fetch(
    `https://raw.githubusercontent.com/${member}/main/README.md`,
  ).then((res) => res.text());
  if (!member) return notFound();
  else {
    return (
      <>
        <Navbar theme="auto" />
        {markdown}
      </>
    );
  }
};

export const generateStaticParams = () => {
  return allMember.map((post) =>
    post.rootPath.replace(/^content\/members\/|\/index.md/, ''),
  );
};

export default MemberProfilePage;
