import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../config.json';

import InputText from '../components/InputText';
import ButtonPink from '../components/ButtonPink';
import TextPink from '../components/TextPink';
import TextBlack from '../components/TextBlack';

import signup_cat from '../assets/images/signup_cat.jpg';
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
    background: ${config.colors.secondaryTitle} url(${signup_cat}) no-repeat scroll 60% 0%;
    background-size: cover;
`;

const ContainerRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 18px;

    img {
        width: 150px;
        margin-bottom: -18px;
        outline: none;
    }

    background-color: ${config.colors.secondaryBackground};
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextDiv = styled.div`
    display: flex;
    gap: 5px;
`;

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    return (
        <ContainerPage>
            <ContainerLeft />

            <ContainerRight>
                <Link to='/'><img src={petgato_logo} alt='Logo PetGatô' /></Link>

                <InputDiv>
                    <InputText name='Nome' onChange={setName} value={name} />
                    <InputText name='Email' onChange={setEmail} value={email} />
                    <InputText name='Senha' password onChange={setPassword} value={password} />
                    <InputText name='Confirme sua senha' password onChange={setPasswordConfirmation} value={passwordConfirmation} />
                </InputDiv>

                <ButtonPink>CADASTRAR</ButtonPink>

                <TextDiv>
                    <TextBlack>Já possui conta?</TextBlack>
                    <TextPink><Link to='/login'>Faça login</Link></TextPink>
                </TextDiv>
            </ContainerRight>
        </ContainerPage>
    );
}

export default SignUpPage;