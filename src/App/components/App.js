import React from 'react'

import styled from 'styled-components'

const StylishWelcome = styled.div`
  padding: 1rem;
  color: white;
  background: red;
  border: 1rem dashed white;
  text-align: center;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`

export const App = () => {
  return (
    <div>
      <StylishWelcome>
        Howdy from a React App Chamber!
      </StylishWelcome>
    </div>
  )
}
