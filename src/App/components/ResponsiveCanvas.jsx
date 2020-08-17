import React, { useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import styled from 'styled-components'

const StylishCanvas = styled(Canvas)`
  height: 100%;
  canvas {
    height: 100vh;
  }
`

const MagicSizer = props => {
  
  useEffect(()=>{
    return () => {

    }
  },[])

  useFrame((three)=>{
    const { gl, camera } = three
    const { context:{ canvas } } = gl
    const dpr = window.devicePixelRatio || 1.0
    const targetWidth = canvas.clientWidth * dpr
    const targetHeight = canvas.clientHeight * dpr
    if(canvas.width !== targetWidth || canvas.height !== targetHeight){
      gl.setSize(targetWidth, targetHeight, false)
      camera.aspect = targetWidth / targetHeight
      camera.updateProjectionMatrix()
    }
  })

  return (
    <>
      { props.children }
    </>
  )
}

export const ResponsiveCanvas = ({
  children, 
  ...props
}) => {
  return (
    <StylishCanvas {...props}>
      <MagicSizer>
        { children }
      </MagicSizer>
    </StylishCanvas>
  )
}