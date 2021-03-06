import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-family: 'Montserrat';
    color: white;
    background-color: ${config.colors.secondaryTitle};

    font-size: 18px;
    height: 65px;

    @media(max-width: 768px) {
        font-size: 12px;
        height: 45px;
    }

    a {
        text-decoration: none;
        padding-left: 5px;
        color: white;
        font-weight: 500;
    }
`;

const CustomBr = styled.br`
    display: none;

    @media(max-width: 500px) {
        display: inline;
    }
`;

const Footer = () => (
    <StyledFooter>
        &copy; 2021 - Todos os direitos reservados. <CustomBr />Desenvolvido por <a href='https://github.com/tilnoene/' target='_blank' rel='noreferrer'>Victor Manuel</a>.
    </StyledFooter>
);

export default Footer;