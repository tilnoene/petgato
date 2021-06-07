import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../config.json';

import InputText from '../components/InputText';
import ButtonPink from '../components/ButtonPink';
import TextPink from '../components/TextPink';
import TextBlack from '../components/TextBlack';

import login_cat from '../assets/images/login_cat.jpg';
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
    background: ${config.colors.secondaryTitle} url(${login_cat}) no-repeat scroll 0% 0%;
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
`;

const TextDiv = styled.div`
    display: flex;
    gap: 5px;
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ContainerPage>
            <ContainerLeft />

            <ContainerRight>
                <Link to='/'><PetGatoLogo src={petgato_logo} /></Link>

                <InputDiv>
                    <InputText name='Email' onChange={setEmail} value={email} />
                    <InputText name='Senha' password onChange={setPassword} value={password} />
                </InputDiv>

                <ButtonPink>ENTRAR</ButtonPink>

                <TextPink><Link to='/recuperar-senha'>Esqueci minha senha</Link></TextPink>
                <TextDiv>
                    <TextBlack>Ainda não tem conta?</TextBlack>
                    <TextPink><Link to='/cadastro'>Crie sua conta</Link></TextPink>
                </TextDiv>
            </ContainerRight>
        </ContainerPage>
    );
}

export default LoginPage;