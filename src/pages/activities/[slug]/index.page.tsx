import React from 'react'
import { useEffect } from 'react'

import { Page, PageMeta } from '../../../components/Page/Page'
import htmlToReact from '../../../lib/html-to-react'
import { PostCollector, Post } from '../../../lib/post-collector'
import { DynamicRouting } from '../../../lib/dynamic-routing'
import ArticleWrapper from '~/components/ArticleWrapper/ArticleWrapper'

const postCollector = new PostCollector('activities')
const dynamicRouting = new DynamicRouting(postCollector)

/**
 * works以下のマークダウンファイルへのパスはここに通されます。
 * @param param0
 * @returns
 */
const ActivitiesPost = ({ post }: { post: Post }) => {
  return (
    <Page meta={post.frontmatter as PageMeta}>
      <ArticleWrapper>{post.content}</ArticleWrapper>
    </Page>
  )
}

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps

export default ActivitiesPost