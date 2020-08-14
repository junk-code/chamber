import React, { useEffect, useRef, useState } from 'react'
import { Stage, AppContext } from 'react-pixi-fiber'
import styled from 'styled-components'
import * as PIXI from "pixi.js";

const StylishStage = styled(Stage)`
  height: 100%;
  width: 100%;
`

const MagicElement = ({ app, children }) => {

  useEffect(()=>{
    console.log({ app, children })
    return () => {

    }
  },[])

  return <>{ children }</>
}

const InternalStage = ({ children }) => {
  return (
  <>
    <StylishStage>
      <AppContext.Consumer>
        { app => {
          return (
          <MagicElement app={app}>
            { children }
          </MagicElement>
          )
        } }
      </AppContext.Consumer>
    </StylishStage>
  </>
  )
}

export const ResponsiveStage = ({ children }) => {
  return <InternalStage>{ children }</InternalStage>
}