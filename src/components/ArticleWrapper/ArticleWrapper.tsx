import { createElement, FC, ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import AutoLink, { AutoLinkProps } from '~/components/AutoLink/AutoLink';
import Code from '~/components/Code/Code';
import Del from '~/components/Del/Del';
import Pre from '~/components/Pre/Pre';

import styles from './style.module.scss';

export type ArticleWrapperProps = {
  children: string;
};

/**
 *
 * @param props `{children: string}` html to be rendered as ReactNode
 * @returns
 */
const ArticleWrapper: FC<ArticleWrapperProps> = (props) => {
  const [article, setArticle] = useState<ReactNode>(null);
  useEffect(() => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement: createElement,
        components: {
          a: ({ href, children }: AutoLinkProps) => <AutoLink href={href}>{children}</AutoLink>,
          del: ({ children }) => <Del>{children}</Del>,
          code: ({ children }) => <Code>{children}</Code>,
          pre: ({ children }) => <Pre>{children}</Pre>,
          img: ({ src = '', alt = 'image' }) => (
            <Image
              src={src}
              alt={alt}
              width={640}
              height={480}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          ),
          p: ({ children }) => <p className={styles.article}>{children}</p>,
        },
      } as RehypeReactOptions)
      .processSync(props.children);

    setArticle(processor.result);
  }, [props.children]);

  return <div className={styles.article}>{article}</div>;
};

export default ArticleWrapper;
