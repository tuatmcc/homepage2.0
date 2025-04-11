import parse from 'html-react-parser';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { MDXFigureComponent } from '~/app/_components/mdx/MDXFigureComponent';
import { MDXLinkComponent } from '~/app/_components/mdx/MDXLinkComponent';
import { MDXScriptComponent } from '~/app/_components/mdx/MDXScriptComponent';

export const components = {
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

export default async function compile(source: string): Promise<ReactNode> {
  const content = parse(source);

  return content;
}
