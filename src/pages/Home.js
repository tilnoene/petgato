import React, { useState } from 'react';
import styled from 'styled-components';
import config from '../config.json';
//import { isAuthenticated, isAdmin } from '../services/auth';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InputText from '../components/InputText';
import Preview from '../components/Preview';
import Line from '../components/Line';

import profile_picture from '../assets/images/cintia_lorenzzo.jpg';
import facebook_icon from '../assets/facebook-icon.svg';
import instagram_icon from '../assets/instagram-icon.svg';
import twitter_icon from '../assets/twitter-icon.svg';

const ContainerPage = styled.div`
    width: 100%;
    min-height: 100vh;

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
    display: grid;
    grid-template-columns: 23% 77%;
    padding: 20px 0;
`;

const ContentLeft = styled.div`
    padding: 0 25px;
    border-right: 1px solid lightgray;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const AboutAuthor = styled.div`
    background-color: ${config.colors.secondaryBackground};
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 60px;
    padding-bottom: 20px;

    h2 {
        font-family: 'Montserrat';
        font-size: 13px;
        font-weight: 400;
        color: ${config.colors.primaryText};
        padding: 0;
        margin: 12px 0 0 0;
    }

    h1 {
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
        color: ${config.colors.primaryTitle};
        padding: 0;
        margin: 0;
    }

    p {
        font-family: 'Montserrat';
        font-size: 14px;
        font-weight: 200;
        color: ${config.colors.primaryText};
        padding: 0;
        margin: 6px 0 18px 0;
        width: 85%;
    }
`;

const ProfilePicture = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${config.colors.secondaryTitle} url(${profile_picture});
    background-position: center;
    background-size: cover;
    margin-top: -60px;
`;

const ContainerIcons = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    gap: 15px;

    img {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`;

const ContentRight = styled.div`
    background-color: ${config.colors.primaryBackground || 'white'};
    padding: 0 25px;
`;

const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    color: ${config.colors.primaryTitle};
    padding: 0;
    margin: 0;
`;

const SubTitle = styled.h2`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 17px;
    color: ${config.colors.secondaryText};
    padding: 0;
    margin: 5px 0;
`;

const PreviewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 96%;
    margin-top: 20px;
`;

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    const submitSearch = () => {
        alert(searchValue);
    }

    const posts = [{
        id: 1,
        name: 'Testando o título',
        content: '<p>Esse post é um <b>teste</b> apenas.</p>',
        views: 20,
        likes: 13,
        comments: 17,
        tags: [{
            id: 1,
            name: 'Cuidados'
        }, {
            id: 2,
            name: 'Cães & Gatos'
        }]
    }, {
        id: 1,
        name: 'Lê aqui em baixo',
        content: '<p>Lê a barra de pesquisa</p>',
        views: 20,
        likes: 13,
        comments: 17,
        tags: [{
            id: 1,
            name: 'Erik Gay'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }]
    }];

    return (
        <ContainerPage>
            <Navbar />
            <ContentPage>
                <ContentLeft>
                    <InputText 
                        name=''
                        value={searchValue}
                        onChange={setSearchValue}
                        search
                        onClick={submitSearch}
                    />

                    <AboutAuthor>
                        <ProfilePicture />
                        <h2>SOBRE A AUTORA</h2>
                        <h1>Cíntia Lorenzzo</h1>
                        <p>
                            Sou veterinária há 5 anos, apaixonada pelo mundo animal, 
                            principalmente os que estão sempre conosco no dia a dia. 
                            Quando não estou no meu consultório com meus pets, 
                            estou aqui escrevendo conteúdo para vocês. Espero que você goste!
                        </p>
                        <ContainerIcons>
                            <a href='https://facebook.com/tilnoene/' target='_blank' rel='noreferrer'><img src={facebook_icon} alt='Facebook Icon' /></a>
                            <a href='https://instagram.com/tilnoene/' target='_blank' rel='noreferrer'><img src={instagram_icon} alt='Instagram Icon' /></a>
                            <a href='https://twitter.com/tilnoene/' target='_blank' rel='noreferrer'><img src={twitter_icon} alt='Twitter Icon' /></a>
                        </ContainerIcons>
                    </AboutAuthor>

                    <Line />

                    <SubTitle>Publicações mais populares:</SubTitle>
                </ContentLeft>

                <ContentRight>
                    <Title>Miau!</Title>
                    <SubTitle>Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</SubTitle>

                    <PreviewContainer>
                        {posts.map(post => <Preview post={post} />)}
                    </PreviewContainer>
                </ContentRight>
            </ContentPage>
            <Footer />
        </ContainerPage>
    );
}

export default Home;