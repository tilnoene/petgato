import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const TextArea = styled.textarea`
    border: 2px solid #c5a5bc;
    -webkit-appearance: none;
    appearance: none;
    background: none;
    padding: 12px;
    border-radius: 3px;
    width: ${props => props.width || '220px'};
    height: 180px;
    outline: none;
    font-size: 14px;
    transition: border-color 0.3 ease;
    box-sizing: border-box;
    resize: none;
    font-family: 'Montserrat';

    &:focus {
        border-color: ${config.colors.primaryTitle};
        transition-delay: 0.1s;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #F0F0F0;
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

    & textarea:valid + span,
    & textarea:focus + span {
        top: -385%;
        font-size: 10px;
        color: ${config.colors.primaryTitle};
        background-color: ${props => props.labelColor || config.colors.secondaryBackground};
    }

    & textarea:valid + span,
    & textarea:focus + span {
        padding: 0 5px;
        left: 8px;
    }
`;

const Span = styled.span`
    position: absolute;
    left: 12px;
    top: calc(150% - 180px);
    transform: translateY(-50%);
    color: #c5a5bc;
    transition: 
        top 0.3s ease,
        font-size 0.3s ease,
        color 0.3s ease;
`;

const TextAreaText = ({ name='', value='', maxLength=32, onChange=null, disabled=false, password=false, width=null, labelColor=null }) => {
    return (
        <Label labelColor={labelColor} >
            <TextArea 
                required
                type={password ? 'password' : 'text'}
                disabled={disabled}
                value={value}
                maxLength={maxLength}
                onChange={e => onChange(e.target.value)}
                width={width}
                rows="4"
                col="50"
            />
            <Span>{name}</Span>
        </Label>
    );
}

export default TextAreaText;