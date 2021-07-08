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
        cursor: ${props => props.cursor || 'default'}
    }

    p {
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 16px;
        padding: 0;
        margin: 0;

        color: ${config.colors.secondaryText};
    }
`;

const Icon = ({ children, image, cursor=null, onClick=undefined }) => (
    <ContainerIcon cursor={cursor}>
        <img src={image} alt='Icon Logo' onClick={onClick} />
        <p>{children}</p>
    </ContainerIcon>
);

export default Icon;