import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const Button = styled.button`
    height: 40px;
    padding: 0 26px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;

    color: ${config.colors.secondaryText};
    background-color: ${config.colors.primaryBackground};
    border: 2px solid ${config.colors.primaryBorder};
`;

const ButtonWhite = ({ children, onClick=null, disabled=false }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}

export default ButtonWhite;