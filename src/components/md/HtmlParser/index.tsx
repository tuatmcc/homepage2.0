'use client';

import { FC, ReactNode, createElement, useEffect, useState } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import { Post } from '../types';

import { PreWithCopyButton } from './PreWithCopyButton';
import styles from './style.module.css';

import { BasicImage } from '~/components/ui/BasicImage';
import { BasicLink, BasicLinkProps } from '~/components/ui/BasicLink';
import { MiniLinkIcon } from '~/components/ui/Svg';
import { parseImageSrc } from '~/libs/parseImageSrc';

export const HtmlParser: FC<Post> = (post) => {
  const { body, rootPath } = post;

  // HTMLをReactNodeに変換する
  const [content, setContent] = useState<ReactNode>(body.html);

  useEffect(() => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement: createElement,
        components: {
          a: ({ href, children }: BasicLinkProps) => (
            <BasicLink href={href}>{children}</BasicLink>
          ),
          img: ({ src, alt }) => (
            <BasicImage
              src={parseImageSrc(src || '', rootPath)}
              alt={alt || ''}
              width={640}
              height={480}
              role={!alt ? 'presentation' : undefined}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          ),
          minilinkicon: () => <MiniLinkIcon />,
          pre: ({ children, ...props }) => {
            return <PreWithCopyButton {...props}>{children}</PreWithCopyButton>;
          },
        },
      } as RehypeReactOptions)
      .processSync(body.html);

    setContent(processor.result);
  }, [body, rootPath]);

  return <div className={styles.articleContent}>{content}</div>;
};
