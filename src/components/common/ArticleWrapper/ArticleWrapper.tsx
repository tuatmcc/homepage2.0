import Image from 'next/image';
import { createElement, FC, ReactNode, useEffect, useState } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';

import styles from './style.module.css';

import AutoLink, { AutoLinkProps } from '~/components/common/AutoLink/AutoLink';
import Code from '~/components/common/Code/Code';
import Del from '~/components/common/Del/Del';
import Pre from '~/components/common/Pre/Pre';
import { MetaData } from '~/types/meta';

export type ArticleWrapperProps = {
	meta: MetaData;
	className?: string;
	children: string;
};

/**
 *
 * @param props `{children: string}` html to be rendered as ReactNode
 * @returns
 */
const ArticleWrapper: FC<ArticleWrapperProps> = (props) => {
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

		setContent(processor.result);
	}, [props.children]);

	const { title, img, date, tags } = props.meta;
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<main className={styles.main}>
			<div className={styles.mainIn}>
				<div className={`${styles.article} ${props.className}`}>
					<h1 className={styles.title}>{title}</h1>
					{img && (
						<Image
							src={img ? img : '/mcc-design.jpg'}
							alt="hero"
							width={800}
							height={300}
							className={styles.hero}
							onError={(e) => {
								e.currentTarget.src = '/mcc-design.jpg';
							}}
						/>
					)}
					<div className={styles.date}>{date}</div>
					<TagList className={styles.tagList}>{tagList}</TagList>
					<div className={styles.content}>{content}</div>
				</div>
			</div>
		</main>
	);
};

export default ArticleWrapper;
