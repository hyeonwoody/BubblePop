import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import NewMessage from './NewMessage';

function App() {
  const [newText, setNewText] = useState('')

  useEffect (()=>{
    const  el =document.querySelector('.bubble.input > div');
    if (el){
      console.log ("dfdfds")
      el.focus();
      if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined"){
        console.log ("zzzzzz")
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      else if (typeof document.body.createTextRange != "undefined") {
        console.log("fdfdxxxxxxxxxxxxxxxxx")
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);cx
        textRange.select();
      }
    }
  },[])
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
