import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const Input = styled.input`
    border: 2px solid #c5a5bc;
    -webkit-appearance: none;
    appearance: none;
    background: none;
    padding: 12px;
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px;
    transition: border-color 0.3 ease;

    &:focus {
        border-color: ${config.colors.primaryTitle};
        //transition-delay: 0.1s;
    }
`;

const Label = styled.label`
    font-family: 'Montserrat';
    position: relative;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 5px;
    cursor: text;

    ${Input}:focus & {
        background-color: blue;
    }
`;

const Span = styled.span`
    position: absolute;
    left: 12px;
    top: calc(50% + 10px);
    transform: translateY(-50%);
    color: #c5a5bc;
    transition: 
        top 0.3s ease,
        font-size 0.3s ease,
        color 0.3s ease;

    ${Input}:focus & {
        top: 20px;
        font-size: 100px;
        color: #BA66A3;
        background: #FBE9F6;
        padding: 0 5px;
    }
`;

const InputText = ({ name='', value='', maxLength=32, onChange=null, disabled=false, password=false }) => {
    return (
        <Label>
            <Input 
                type={password ? 'password' : 'text'}
                disabled={disabled}
                value={value}
                maxLength={maxLength}
                onChange={e => onChange(e.target.value)}
            />
            <Span>{name}</Span>
        </Label>
    );
}

export default InputText;