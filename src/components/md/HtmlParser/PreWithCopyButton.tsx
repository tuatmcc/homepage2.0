import { ComponentPropsWithoutRef, FC, ReactNode, useCallback, useRef, useState } from 'react';

import { CopyIcon } from '~/components/ui/Svg/CopyIcon';

export const PreWithCopyButton: FC<ComponentPropsWithoutRef<'pre'>> = ({ children, ...props }) => {
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
