import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import config from '../config.json';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import InputText from '../components/InputText';
import TextArea from '../components/TextArea';
import ButtonWhite from '../components/ButtonWhite';

import contact_dog from '../assets/images/contact_dog.jpg';

const ContainerPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${config.colors.primaryBackground || 'white'};

    display: grid;
    grid-template-rows: 90px calc(100% - 155px) 65px;

    @media(max-width: 1280px) {
        grid-template-rows: 80px calc(100% - 145px) 65px;
    }

    @media(max-width: 768px) {
        grid-template-rows: 80px calc(100% - 125px) 45px;
    }
`;

const ContentPage = styled.div`
    margin: 25px auto;
    width: 85%;

    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 25px;
`;

const ContainerRight = styled.div`
    div {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 90%;
        gap: 10px;
        padding-bottom: 10px;
    }

    button {
        float: right;
        margin-top: 10px;
        margin-right: calc(10% - 10px);
    }
`;

const DogImage = styled.div`
    width: 100%;
    height: 60vh;
    background: ${config.colors.secondaryTitle} url(${contact_dog}) no-repeat scroll 30% 0%;
    background-size: cover;
`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <ContainerPage>
            <Navbar currentPage={3} />
            <ContentPage>
                <DogImage />

                <ContainerRight>
                    <Subtitle>FALE CONOSCO</Subtitle>
                    <Title>Envie-nos uma mensagem de cão-tato</Title>
                    
                    <div>
                        <InputText 
                            name='Nome'
                            width='100%'
                            onChange={setName}
                            value={name}
                            labelColor={config.colors.primaryBackground} 
                        />
                        <InputText 
                            name='Email' 
                            width='100%' 
                            onChange={setEmail}
                            value={email}
                            labelColor={config.colors.primaryBackground} 
                        />
                    </div>
                    <TextArea 
                        name='Mensagem'
                        width='calc(90% + 10px)'
                        onChange={setMessage}
                        value={message}
                        labelColor={config.colors.primaryBackground} 
                    />
                    <ButtonWhite>ENVIAR</ButtonWhite>
                </ContainerRight>
            </ContentPage>
            <Footer />
        </ContainerPage>
    );
}

export default Contact;