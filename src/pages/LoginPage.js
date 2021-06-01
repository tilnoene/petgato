import React, { useState } from 'react';
import styled from 'styled-components';
import config from '../config.json';

import InputText from '../components/InputText';
import login_cat from '../assets/images/login_cat.jpg';

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
    gap: 20px;
    background-color: ${config.colors.secondaryBackground};
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ContainerPage>
            <ContainerLeft />

            <ContainerRight>
                <InputText name='Email' onChange={setEmail} value={email} />
                <InputText name='Senha' onChange={setPassword} value={password} />
            </ContainerRight>
        </ContainerPage>
    );
}

export default LoginPage;