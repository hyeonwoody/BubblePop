import React, { useCallback,useState } from 'react';
import styled from 'styled-components';
import Content from './Content';

const NewMessage = ({value, onChange, onSubmit}) => {
    const [submitted, setSubmitted] = useState(false);
    const handleChange = useCallback (
        e => {
            console.log("eee", e.target.value);
            onChange && onChange (e.target.value);
        },
        [onChange]
    );
    
    const handleKeyDown = useCallback (
      e => {
        if (e.keyCode === 13){
          onSubmit && onSubmit()
          e.preventDefault()
          setSubmitted(true)
          setTimeout (()=>{
            window.document.querySelector('.bubble.input > div').focus()
            setSubmitted(false)
          },10)
        }
      }
    )

    console.log ('test text : ', value);
    return (
        <InputMessage 
        className={`bubble input ${value.length === 0 ? 'empty' : ''}`}
        >
            <Content
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </InputMessage>
    )
}

export const InputMessage = styled.div`
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
  border: none;
  outline: none;
  background-color: #000;
  font-size: 32px;
  min-width: 30px;
  color : #FFF;
  &.submitted {
    transition: none;
  }
  &.empty {
    opacity: 0;
  }
`;

export default NewMessage;