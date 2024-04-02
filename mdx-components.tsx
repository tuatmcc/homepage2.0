// This file is required to use MDX in `app` directory.

import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import { MDXFigureComponent } from '~/app/_components/mdx/MDXFigureComponent';
import { MDXLinkComponent } from '~/app/_components/mdx/MDXLinkComponent';
import { MDXScriptComponent } from '~/app/_components/mdx/MDXScriptComponent';

export const mdxComponents = {
  a: (props: ComponentPropsWithoutRef<typeof MDXLinkComponent>) => (
    <MDXLinkComponent {...props} />
  ),
  figure: (props: ComponentPropsWithoutRef<typeof MDXFigureComponent>) => (
    <MDXFigureComponent {...props} />
  ),
  script: (props: ComponentPropsWithoutRef<typeof MDXScriptComponent>) => (
    <MDXScriptComponent {...props} />
  ),
} as MDXComponents;

// biome-ignore lint/style/useNamingConvention: <explanation>
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
