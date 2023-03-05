import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function App() {

  return (
    <AppDiv>
      <Container>
      </Container>
    </AppDiv>
  )
}

const AppDiv = styled.div`
  background-color: #00ff00;
  width: 1920px;
  height: 1080px;
  display: flex;
`

export default App;
