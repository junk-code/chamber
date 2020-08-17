import React, { useEffect } from 'react'
import { Stage, AppContext } from 'react-pixi-fiber'
import styled from 'styled-components'
// import * as PIXI from 'pixi.js'

const StylishStage = styled(Stage)`
  height: 100%;
  width: 100%;
`

const MagicElement = ({ app, children }) => {
  useEffect(() => {
    const { ticker, renderer } = app
    const { gl: { canvas } } = renderer
    const sizer = () => {
      const dpr = window.devicePixelRatio || 1.0
      const targetWidth = canvas.clientWidth * dpr
      const targetHeight = canvas.clientHeight * dpr
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        renderer.resize(targetWidth, targetHeight, false)
      }
    }
    ticker.add(sizer)
    return () => {
      ticker.remove(sizer)
    }
  }, [])

  return <>{children}</>
}

const InternalStage = ({ children }) => {
  return (
    <>
      <StylishStage>
        <AppContext.Consumer>
          {app => {
            return (
              <MagicElement app={app} children={children} />
            )
          }}
        </AppContext.Consumer>
      </StylishStage>
    </>
  )
}

export const ResponsiveStage = ({ children, ...rest }) => {
  return <InternalStage children={children} {...rest} />
}
