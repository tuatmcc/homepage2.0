'use client';

import {
	FC,
	HTMLProps,
	ReactNode,
	createElement,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react';
import { unified } from 'unified';

import styles from './style.module.css';

import { BasicImage } from '~/components/ui/BasicImage';
import { MiniLinkIcon } from '~/components/ui/Svg';
import { CopyIcon } from '~/components/ui/Svg/CopyIcon';
import { TextLink, TextLinkProps } from '~/components/ui/TextLink';
import { parseImageSrc } from '~/utils/parseImageSrc';

export type ArticleWrapperProps = {
	children: string;
};

const Pre: FC<HTMLProps<HTMLPreElement>> = ({ children, ...props }) => {
	const [copyButtonContent, setCopyButtonContent] = useState<ReactNode>(<CopyIcon />);
	const ref = useRef<HTMLPreElement>(null);

	const copyCode = useCallback(() => {
		navigator.clipboard.writeText(ref.current?.innerText || '');
		setCopyButtonContent('Copied!');
		const timeout = setTimeout(() => setCopyButtonContent(<CopyIcon />), 1000);

		return () => clearTimeout(timeout);
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

export const HtmlParser: FC<{ html: string; group: string; slug: string }> = ({
	html,
	group,
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
					a: ({ href, children }: TextLinkProps) => <TextLink href={href}>{children}</TextLink>,
					img: ({ src = '', alt = 'image' }) => (
						<BasicImage
							src={parseImageSrc(src, group, slug)}
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
			.processSync(html);

		setContent(processor.result);
	}, [html, group, slug]);

	return <div className={styles.articleContent}>{content}</div>;
};
