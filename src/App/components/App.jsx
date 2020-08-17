import React from 'react'
import { Text } from 'react-pixi-fiber'
import { ResponsiveStage } from './ResponsiveStage'

export const App = () => {
  return (
    <ResponsiveStage>
      <Text
        text='This is a Test 1234 from App.jsx!'
        x={20}
        y={20}
        style={{
          fill: 0xff0000,
          fontSize: 30
        }}
      />
    </ResponsiveStage>
  )
}
