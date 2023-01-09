import Image from 'next/image';
import { createElement, FC, ReactNode, useEffect, useState, useCallback } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import styles from './style.module.css';

import { MetaData } from '~/features/seo';
import { TextLink, TextLinkProps } from '~/features/ui/Elements';
import { MiniLinkIcon } from '~/features/ui/Svg';

export type ArticleWrapperProps = {
	meta: MetaData;
	children: string;
};

/**
 *
 * @param parserProps `{children: string}` html to be rendered as ReactNode
 * @returns
 */
export const HtmlParser: FC<{ contentHtml: string }> = ({ contentHtml }) => {
	const copyCode = useCallback<(button: HTMLButtonElement, preId: string) => void>((button, preId) => {
		window.navigator.clipboard.writeText(document.getElementById(preId)?.innerText || '');
		button.innerHTML = 'Copied!';
		setInterval(() => {
			button.innerHTML = 'Copy';
		}, 1000);
	}, []);

	// HTMLをReactNodeに変換する
	const [content, setContent] = useState<ReactNode>(null);

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
						const id = `code${Math.random()}`;
						return (
							<pre id={id} {...props}>
								<button type='button' onClick={(e) => copyCode(e.currentTarget, id)}>
									Copy
								</button>
								{children}
							</pre>
						);
					},
				},
			} as RehypeReactOptions)
			.processSync(contentHtml);

		setContent(processor.result);
	}, [copyCode, contentHtml]);

	return <div className={styles.articleContent}>{content}</div>;
};
