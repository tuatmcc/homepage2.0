'use client';

import { FC, ReactNode, createElement, useEffect, useState } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import { PreWithCopyButton } from './PreWithCopyButton';
import styles from './style.module.css';

import { BasicImage } from '~/components/ui/BasicImage';
import { BasicLink, BasicLinkProps } from '~/components/ui/BasicLink';
import { MiniLinkIcon } from '~/components/ui/Svg';
import { parseImageSrc } from '~/libs/parseImageSrc';

export type ArticleWrapperProps = {
	children: string;
};

export const HtmlParser: FC<{ html: string; documentType: string; slug: string }> = ({
	html,
	documentType,
	slug,
}) => {
	// HTMLをReactNodeに変換する
	const [content, setContent] = useState<ReactNode>(html);

	useEffect(() => {
		const processor = unified()
			.use(rehypeParse, { fragment: true })
			.use(rehypeReact, {
				createElement: createElement,
				components: {
					a: ({ href, children }: BasicLinkProps) => <BasicLink href={href}>{children}</BasicLink>,
					img: ({ src, alt }) => (
						<BasicImage
							src={parseImageSrc(src || '', documentType, slug)}
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
			.processSync(html);

		setContent(processor.result);
	}, [html, documentType, slug]);

	return <div className={styles.articleContent}>{content}</div>;
};
