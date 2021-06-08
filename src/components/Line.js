import React from 'react';
import styled from 'styled-components';

const ContainerLine = styled.div`
    width: 100%;
    height: 1px;

    div {
        background-color: lightgray;
        height: 1px;
        margin: 0 20px;
    }
`;

const Line = () => (
    <ContainerLine>
        <div />
    </ContainerLine>
);

export default Line;