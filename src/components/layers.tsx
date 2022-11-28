import { ReactElement, useEffect, useRef, useState } from 'react'
import { chakra } from '@chakra-ui/react'

/**
 * 画面いっぱいに重なるdiv要素を作成する。
 * @returns
 */
export const Full = chakra('div', {
  baseStyle: {
    pos: 'absolute',
    w: '100%', // width
    maxW: '100%',
    minW: '100%',
    h: '100%', // height
    maxH: '100%',
    minH: '100%',
    p: 0, // padding
    m: 0, // margin
    overflow: 'hidden',
  },
})

/**
 * 画面いっぱいで重なるdiv要素の親コンテナを作成する。
 * @param props children
 * @returns
 */
export const FullContainer = chakra('div', {
  baseStyle: {
    pos: 'fixed',
    w: '100%',
    maxW: '100%',
    minW: '100%',
    h: '100%',
    maxH: '100%',
    minH: '100%',
    p: 0,
    m: 0,
    overflow: 'hidden',
  },
})
