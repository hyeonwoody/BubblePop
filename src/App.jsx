import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import NewMessage from './NewMessage';

function App() {
  const [newText, setNewText] = useState('')
  return (
    <AppDiv>
      <Container>
        <NewMessage
          value={newText}
          onChange={setNewText}
        />
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
