import React from 'react'
import { Box } from './Box'
import { ResponsiveCanvas } from './ResponsiveCanvas'

export const App = () => {
  return (
    <ResponsiveCanvas 
      style={{ background: "#272730" }} 
      camera={{ position: [0, 0, 6] }}
    >
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[0, 1.2, 0]} />
      <Box position={[0, -1.2, 0]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </ResponsiveCanvas>
  )
}
