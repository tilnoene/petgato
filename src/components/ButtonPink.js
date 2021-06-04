import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const Button = styled.button`
    height: 40px;
    padding: 0 22px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;

    color: ${config.colors.primaryBackground};
    background-color: ${config.colors.primaryTitle};
`;

const ButtonPink = ({ children, onClick=null, disabled=false }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
        >
        {children}
        </Button>
    );
}

export default ButtonPink;