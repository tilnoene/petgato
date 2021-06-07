import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

import facebook_icon from '../assets/facebook-icon.svg';
import instagram_icon from '../assets/instagram-icon.svg';
import twitter_icon from '../assets/twitter-icon.svg';

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
    grid-template-columns: 35% 65%;
    grid-gap: 25px;

    p {
        font-family: 'Montserrat';
        font-weight: 400;
        color: ${config.colors.secondaryText};
        font-size: 13px;
    }
`;

const ContainerImages = styled.div`
    background-color: yellow;
    height: 320px;
`;

const ContainerIcons = styled.div`
    display: flex;
    gap: 18px;

    img {
        width: 25px;
        cursor: pointer;
    }
`;

const About = () => {
    return (
        <ContainerPage>
            <Navbar currentPage={2} />
            <ContentPage>
                <ContainerImages>
                    
                </ContainerImages>

                <div>
                    <Subtitle>SOBRE NÓS</Subtitle>
                    <Title>O que é o Pet Gatô?</Title>
                    <p>
                        O Pet Gatô surgiu em 2021, como um trabalho de faculdade. Estava cursando Medicina Veterinária e resolvi pegar uma disciplina de jornalismo, em que tive que escrever para um blog fictício. Dei o nome de <b>Pet Gatô</b>, como um trocadilho infame que minha professora adorou. Foi quando descobri minha paixão por escrever e resolvi unir o útil ao agradável e criar este blog.
                        <br /><br />
                        Desde então, utilizei deste meio para informar país de pets do Brasil inteiro, estendendo os cuidados da mnha profissão através da Internet. Além disso, compartilho histórias engraçadas, descobertas do meu cotidiano e fotos dos meus dois amores, o Floquinho, meu cão samoeida e a Mandrágora, minha cacatua.
                        <br /><br />
                        Meu nome é Cíntia Lorenzzo e sou veterinária há 5 anos, apaixonada pelo mundo animal, principalmente os que estão sempre presentes no nosso dia a dia. Além de escrever, gosto de correr no Parque do Ibirapuera com o Floquinho e cantar com a Mands, uma berradora nata.
                        <br /><br />
                        Quer conhecer mais sobre mim? Me siga nas minhas redes sociais:
                    </p>
                    <ContainerIcons>
                        <a href='https://facebook.com/tilnoene/' target='_blank' rel='noreferrer'><img src={facebook_icon} alt='Facebook Icon' /></a>
                        <a href='https://instagram.com/tilnoene/' target='_blank' rel='noreferrer'><img src={instagram_icon} alt='Instagram Icon' /></a>
                        <a href='https://twitter.com/tilnoene/' target='_blank' rel='noreferrer'><img src={twitter_icon} alt='Twitter Icon' /></a>
                    </ContainerIcons>
                </div>
            </ContentPage>
            <Footer />
        </ContainerPage>
    );
}

export default About;