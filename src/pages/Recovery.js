import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../config.json';

import InputText from '../components/InputText';
import ButtonPink from '../components/ButtonPink';
import TextPink from '../components/TextPink';
import TextBlack from '../components/TextBlack';

import recovery_cat from '../assets/images/recovery_cat.jpg';
import petgato_logo from '../assets/petgato-logo-pink.svg';

const ContainerPage = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    @media(max-width: 1024px) {
        grid-template-columns: 0 100%;
    }
`;

const ContainerLeft = styled.div`
    width: 100%;
    background: ${config.colors.secondaryTitle} url(${recovery_cat}) no-repeat scroll 50% 0%;
    background-size: cover;
`;

const ContainerRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 18px;

    background-color: ${config.colors.secondaryBackground};
`;

const PetGatoLogo = styled.img`
    width: 150px;
    margin-bottom: -18px;
    outline: none;
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;

    p {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat';
        font-size: 12px;
        text-align: center;
        color: ${config.colors.secondaryText};
    }
`;

const TextDiv = styled.div`
    display: flex;
    gap: 5px;
`;

const Recovery = () => {
    const [email, setEmail] = useState('');

    return (
        <ContainerPage>
            <ContainerLeft />

            <ContainerRight>
                <Link to='/'><img src={petgato_logo} alt='Logo PetGatô' /></Link>

                <InputDiv>
                    <InputText name='Email' onChange={setEmail} value={email} />
                    <p>Insira seu email para recuperar a senha</p>
                </InputDiv>

                <ButtonPink>RECUPERAR SENHA</ButtonPink>

                <TextDiv>
                    <TextBlack>Lembrou a senha?</TextBlack>
                    <TextPink><Link to='/login'>Faça login</Link></TextPink>
                </TextDiv>
                <TextDiv>
                    <TextBlack>Ainda não tem conta?</TextBlack>
                    <TextPink><Link to='/cadastro'>Crie sua conta</Link></TextPink>
                </TextDiv>
            </ContainerRight>
        </ContainerPage>
    );
}

export default Recovery;