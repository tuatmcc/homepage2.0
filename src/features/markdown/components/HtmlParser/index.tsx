import Image from 'next/image';
import { createElement, FC, ReactNode, useEffect, useState, useCallback, HTMLProps, useRef } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import styles from './style.module.css';

import { TextLink, TextLinkProps } from '~/features/ui/Elements';
import { MiniLinkIcon } from '~/features/ui/Svg';
import { CopyIcon } from '~/features/ui/Svg/CopyIcon';
import { MetaData } from '~/types/meta';

export type ArticleWrapperProps = {
	meta: MetaData;
	children: string;
};

const Pre: FC<HTMLProps<HTMLPreElement>> = ({ children, ...props }) => {
	const [copyButtonContent, setCopyButtonContent] = useState<ReactNode>(<CopyIcon />);
	const ref = useRef<HTMLPreElement>(null);
	const copyCode = useCallback(() => {
		navigator.clipboard.writeText(ref.current?.innerText || '');
		setCopyButtonContent('Copied!');
		setInterval(() => setCopyButtonContent(<CopyIcon />), 1000);
	}, []);

	return (
		<div>
			<pre ref={ref} {...props}>
				<button type="button" onClick={copyCode} aria-label="copy">
					{copyButtonContent}
				</button>
				{children}
			</pre>
		</div>
	);
};

export const HtmlParser: FC<{ contentHtml: string }> = ({ contentHtml }) => {
	// HTMLをReactNodeに変換する
	const [content, setContent] = useState<ReactNode>(null);

	// rome-ignore lint/nursery/useExhaustiveDependencies: why?
	useEffect(() => {
		const processor = unified()
			.use(rehypeParse, { fragment: true })
			.use(rehypeReact, {
				createElement: createElement,
				components: {
					a: ({ href, children }: TextLinkProps) => <TextLink href={href}>{children}</TextLink>,
					img: ({ src = '', alt = 'image' }) => (
						<Image
							src={src}
							alt={alt}
							width={640}
							height={480}
							style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
						/>
					),
					minilinkicon: () => <MiniLinkIcon />,
					pre: ({ children, ...props }) => {
						return <Pre {...props}>{children}</Pre>;
					},
				},
			} as RehypeReactOptions)
			.processSync(contentHtml);

		setContent(processor.result);
	}, [contentHtml]);

	return <div className={styles.articleContent}>{content}</div>;
};
