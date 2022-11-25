import React, { useEffect, useRef, useState } from 'react'

/**
 * 位置が固定されたcanvas
 * @returns <div><canvas>
 */
export const TitleCanvas = () => {
  const canvasParentRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>()

  useEffect(() => {
    if (!canvasRef.current || !canvasParentRef.current) return

    const canvas = canvasRef.current
    canvas.width = canvasParentRef.current.clientWidth
    canvas.height = canvasParentRef.current.clientHeight
    addEventListener('resize', () => {
      if (canvasParentRef.current) {
        canvas.width = canvasParentRef.current.clientWidth
        canvas.height = canvasParentRef.current.clientHeight
      }
    })
    const ctx = canvas.getContext('2d')
    if (canvas && ctx) {
      // 全アニメーションはここで実行される
      moveAnimation(canvas, ctx, false)
    }
    setContext(ctx || undefined)
  }, [])

  return (
    <div
      style={{ position: 'absolute', width: '100%', minHeight: '100%' }}
      ref={canvasParentRef}
      onTouchMove={(event: React.TouchEvent) => event.preventDefault}
    >
      <canvas style={{ position: 'fixed' }} ref={canvasRef}></canvas>
    </div>
  )
}

const moveAnimation = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  isPointing: boolean
) => {
  const startUp = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    height: canvas.height / 2,
    bgColor: '#333333',
    color: '#eee',
    font1: `${canvas.width / 50}px 游明朝`,
    text1: '東京農工大学　の　Tech系サークル',
    currentTextIndex: 0,
    draw() {
      if (isPointing) return
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = this.bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = this.color
      ctx.font = this.font1
      const width = ctx.measureText(this.text1).width
      ctx.fillText(
        `${this.text1.slice(0, this.currentTextIndex)}|`,
        this.x - width / 2,
        this.y
      )
    },
  }

  const bgRect = {
    draw() {
      ctx.globalCompositeOperation = 'source-out'
      ctx.fillStyle = '#00000016'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    },
  }

  const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 100,
    color: '#ffffff',
    draw() {
      clear()
      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fillStyle = this.color
      ctx.fill()
    },
  }

  const draw = () => {
    if (isPointing) {
      ball.draw()
    }
  }

  const clear = () => {
    if (isPointing) {
      bgRect.draw()
    }
  }

  addEventListener('mousemove', (event) => {
    ball.x = event.clientX
    ball.y = event.clientY
    draw()
  })

  addEventListener('touchmove', (event) => {
    ball.x = event.touches[0].clientX
    ball.y = event.touches[0].clientY
    draw()
  })

  addEventListener('touchend', (event) => clear())

  const inputText = () => {
    startUp.draw()
    if (startUp.currentTextIndex >= startUp.text1.length + 5) {
      endTypeOpening()
      isPointing = true
      clear()
    }
    startUp.currentTextIndex++
  }

  let timer: NodeJS.Timer
  const startTypeOpening = () => {
    timer = setInterval(inputText, 200)
  }
  const endTypeOpening = () => {
    clearInterval(timer)
  }

  startTypeOpening()
}
