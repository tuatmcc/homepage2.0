import Image from 'next/image';
import { createElement, FC, ReactNode, useEffect, useState } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import styles from './style.module.css';
import 'highlight.js/styles/a11y-dark.css';

import { AutoLink, AutoLinkProps } from '~/components/common/auto-link';
import { CodeBlock } from '~/components/common/code-block';
import { Del } from '~/components/common/del';
import { MiniLinkIcon } from '~/components/common/icons/mini-link-icon';
import { Tag } from '~/components/common/tag';
import { TagList } from '~/components/common/tag/tag-list';
import { MetaData } from '~/types/meta';

export type ArticleWrapperProps = {
	meta: MetaData;
	children: string;
};

/**
 *
 * @param props `{children: string}` html to be rendered as ReactNode
 * @returns
 */
export const ArticleWrapper: FC<ArticleWrapperProps> = (props) => {
	// HTMLをReactNodeに変換する
	const [content, setContent] = useState<ReactNode>(null);
	useEffect(() => {
		const processor = unified()
			.use(rehypeParse, { fragment: true })
			.use(rehypeReact, {
				createElement: createElement,
				components: {
					a: ({ href, children }: AutoLinkProps) => <AutoLink href={href}>{children}</AutoLink>,
					del: ({ children }) => <Del>{children}</Del>,
					pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
					img: ({ src = '', alt = 'image' }) => (
						<Image
							src={src}
							alt={alt}
							width={640}
							height={480}
							style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
						/>
					),
					div: (props) => {
						if (Object.hasOwn(props, 'data-language')) {
							return (
								<div className={styles.codeblockTitle} {...props}>
									{props.children}
								</div>
							);
						} else if (Object.hasOwn(props, 'data-rehype-pretty-code-fragment')) {
							return (
								<div className={styles.codeblockFragment} {...props}>
									{props.children}
								</div>
							);
						} else {
							return <div {...props}>{props.children}</div>;
						}
					},
					minilinkicon: () => <MiniLinkIcon />,
				},
			} as RehypeReactOptions)
			.processSync(props.children);

		setContent(processor.result);
	}, [props.children]);

	const { title, img, date, tags } = props.meta;
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<>
			<header>
				<div className={styles.headerContent}>
					<Image
						src={img ? img : '/tuat-gate.webp'}
						alt="hero"
						width={800}
						height={300}
						className={styles.heroImage}
						onError={(e) => {
							e.currentTarget.src = '/tuat-gate.webp';
						}}
						priority
					/>
					<div className={styles.heroImageOverlay} />
					<h1 className={styles.title}>{title}</h1>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<div className={styles.article}>
						<div className={styles.date}>{date}</div>
						<TagList className={styles.tagList}>{tagList}</TagList>
						<div className={styles.content}>{content}</div>
					</div>
				</div>
			</main>
		</>
	);
};
