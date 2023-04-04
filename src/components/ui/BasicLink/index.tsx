import NextLink from 'next/link';
import { ComponentPropsWithRef, ReactNode } from 'react';

export type BasicLinkProps = ComponentPropsWithRef<'a'> & {
	children: ReactNode;
	href: string;
};

/**
 * A link that can be used for both internal and external links.
 * If the link is internal, it will use Next.js' Link component.
 * Otherwise, it will use a regular anchor tag.
 * @param ComponentPropsWithRef<'a'> - The props for the link.
 * @param href - The link's href.
 * @param children - The link's children.
 * @returns A link that can be used for both internal and external links.
 * @example
 * <BasicLink href="https://google.com">Google</BasicLink>
 * <BasicLink href="/about">About</BasicLink>
 */
export const BasicLink = ({ children, href, ...props }: BasicLinkProps) => {
	if (href.startsWith('/') || href.startsWith('#') || !href.includes('://'))
		return (
			<NextLink href={href} {...props}>
				{children}
			</NextLink>
		);
	else
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
				{children}
			</a>
		);
};
