import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const ContainerIcon = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 6px;
    
    img {
        width: 25px;
        height: 25px;   
    }

    p {
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 16px;

        color: ${config.colors.secondaryText};
    }
`;

const Icon = ({ children, image }) => (
    <ContainerIcon>
        <img src={image} />
        <p>{children}</p>
    </ContainerIcon>
);

export default Icon;