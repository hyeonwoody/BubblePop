import React from 'react'
import styled from 'styled-components';
const Bubble = ({ id, children}) => {
  return (
    <BubbleDiv
      key={id}
    >
      {children}
    </BubbleDiv>
  )
}

const BubbleDiv = styled.div`
  border-radius: 30px;
  padding: 12px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  max-width: 600px;
  margin-right: 25%;
  background-color: #eee;
  position: relative;

  &:last-child:before,
  &:nth-last-child(2):before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -12px;
    height: 26px;
    width: 30px;
    background: #eee;
    border-bottom-right-radius: 20px;
  }border-radius: 30px;
  padding: 12px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  max-width: 600px;background-color: #00ff00;
  width: 1920px;
  height: 1080px;
  display: flex;
`


export default Bubble
