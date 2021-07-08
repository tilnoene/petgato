import React from 'react';
import styled from 'styled-components';

const ContainerLine = styled.div`
    width: ${props => props.width || '100%'};
    height: 1px;
    margin: auto;

    background-color: ${props => props.color || 'lightgray'};
`;

const Line = ({ width, color=null }) => (
    <ContainerLine width={width} color={color}>
        <div />
    </ContainerLine>
);

export default Line;