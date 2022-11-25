import { ReactElement } from "react"

const TitleLayer = (props: {children: ReactElement, className: string}) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
      className={props.className}
      >
      {props.children}
    </div>
  )
}

export default TitleLayer
