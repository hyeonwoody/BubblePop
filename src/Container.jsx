import React from 'react';
import styled from 'styled-components';

const Container= ({children}) => {
    return <ContainerDiv>
        {children}
        <p>fdfd</p>
    </ContainerDiv>
}

const ContainerDiv = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default Container;