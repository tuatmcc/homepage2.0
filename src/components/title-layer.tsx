import { ReactElement } from 'react'

const TitleLayer = (props: { children: ReactElement; className: string }) => {
  return (
    <div
      style={{
        position: 'absolute',
        padding: '0 0',
        margin: '0 0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      className={props.className}
    >
      {props.children}
    </div>
  )
}

export default TitleLayer
