import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import NewMessage from './NewMessage';
import textArray from './TextArray'
import Bubble from './Bubble'

function App() {
  const [newText, setNewText] = useState('')
  const [texts, addText] = textArray([])

  const handleSubmit = useCallback (()=> {
    console.log("뉴뉴",newText)
    if (newText.length >0){
      addText(newText);
      setNewText('')
      
    }
  },[newText,texts])

  useEffect (()=>{
    const  el =document.querySelector('.bubble.input > div');
    if (el){
      el.focus();
    }
    else {
    }
  },[])
  return (
    <AppDiv>
      <Container>
      {texts && texts.map(m => (
          <Bubble key={m} id={m}>
            {m}
          </Bubble>
        ))}
        <NewMessage
          value={newText}
          onChange={setNewText}
          onSubmit={handleSubmit}
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
