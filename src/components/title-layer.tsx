import { ReactElement, useEffect, useRef, useState } from 'react'

const TitleLayer = (props: { children: ReactElement; className: string }) => {
  const layerRef = useRef<HTMLDivElement>(null)
  const [layerWidth, setLayerWidth] = useState(0)
  const [layerHeight, setLayerHeight] = useState(0)

  const handleResize = () => {
    if (layerRef.current) {
      setLayerWidth(layerRef.current.clientWidth)
      setLayerHeight(layerRef.current.clientHeight)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        padding: '0 0',
        margin: '0 0',
        width: layerWidth || '100%',
        height: layerHeight || '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      className={props.className}
      ref={layerRef}
    >
      {props.children}
    </div>
  )
}

export default TitleLayer
