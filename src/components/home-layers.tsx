import { ReactElement, useEffect, useRef, useState } from 'react'
import styles from '../styles/home.module.css'

/**
 * 重なるレイヤーを作成する。何重にも重ねることができる。
 * @param props children, classNmae
 * @returns
 */
export const HomeLayer = (props: { children?: ReactElement }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.children}
    </div>
  )
}

/**
 * 重なるレイヤーのコンテナを作成する。
 * @param props children
 * @returns 
 */
export const HomeContainer = (props: {
  children: ReactElement | ReactElement[]
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {props.children}
    </div>
  )
}
