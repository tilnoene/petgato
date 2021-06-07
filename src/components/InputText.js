import React, { useState } from 'react';
import styled from 'styled-components';
import config from '../config.json';

import eye_icon from '../assets/eye.svg';
import closed_eye_icon from '../assets/eye-blocked.svg';

const Input = styled.input`
    border: 2px solid ${config.colors.primaryBorder};
    -webkit-appearance: none;
    appearance: none;
    background: none;
    padding: 12px;
    border-radius: 3px;
    width: ${props => props.width || '220px'};
    outline: none;
    font-size: 14px;
    transition: border-color 0.3 ease;
    box-sizing: border-box;
    font-family: 'Montserrat';

    &:focus {
        border-color: ${config.colors.primaryTitle};
        transition-delay: 0.1s;
    }
`;

const Label = styled.label`
    font-family: 'Montserrat';
    position: relative;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 5px;
    cursor: text;     
    user-select: none; 

    & input:valid + span,
    & input:focus + span {
        top: 33%;
        font-size: 10px;
        color: ${config.colors.primaryTitle};
        background-color: ${props => props.labelColor || config.colors.secondaryBackground};
    }

    & input:valid + span,
    & input:focus + span {
        padding: 0 5px;
        left: 8px;
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
`;

const Icon = styled.img`
    cursor: pointer;
    width: 26px;
    height: 26px;
    
    margin-left: -40px;
    margin-bottom: -8px;
`;

const InputText = ({ name='', value='', maxLength=32, onChange=null, disabled=false, password=false }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <Label labelColor={labelColor} >
            <Input 
                required
                type={password ? (showPassword ? 'text' : 'password') : 'text'}
                disabled={disabled}
                value={value}
                maxLength={maxLength}
                onChange={e => onChange(e.target.value)}
                width={width}
            />
            <Span>{name}</Span>
            {password && (
                <Icon 
                    src={showPassword ? closed_eye_icon : eye_icon} 
                    onClick={() => setShowPassword(!showPassword)}
                />
            )}
        </Label>
    );
}

export default InputText;