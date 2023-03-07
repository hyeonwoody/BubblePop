import React, { useCallback } from 'react';
import styled from 'styled-components';
import Content from './Content';

const NewMessage = ({value, onChange}) => {

    const handleChange = useCallback (
        e => {
            console.log("eee", e.target.value);
            onChange && onChange (e.target.value);
        },
        [onChange]
    );

    console.log ('test text : ', value);
    return (
        <InputMessage 
        className={`bubble input ${value.length === 0 ? 'empty' : ''}`}
        >
            <Content
                value={value}
                onChange={handleChange}
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