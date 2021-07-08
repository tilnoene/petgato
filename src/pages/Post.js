import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../config.json';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContainerPage from '../components/ContainerPage';
import InputText from '../components/InputText';
import SubTitle from '../components/SubTitle';
import PopularPosts from '../components/PopularPosts';
import Icon from '../components/Icon';
import Line from '../components/Line';

import defaultImage from '../assets/images/signup_cat.jpg';
import arrow_left from '../assets/arrow-left-icon.svg';
import eye_icon from '../assets/eye-icon.svg';
import heart_icon from '../assets/heart-icon-1.svg';
import heart_icon_activated from '../assets/heart-icon-2.svg';

const Loading = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
`;

const ContentPage = styled.div`
    display: grid;
    grid-template-columns: auto 275px;
    padding: 20px 0;
`;

ContentPage.Left = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

ContentPage.Right = styled.div`
    padding: 0 25px;
    border-left: 1px solid lightgray;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ContainerBackButton = styled.div`
    display: flex;
    width: min-content;
    align-items: center;
    gap: 18px;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    p {
        font-family: 'Montserrat';
        font-size: 16px;
        color: ${config.colors.primaryText};
        cursor: pointer;
        padding-top: 2px;
    }
`;

const BackButton = ({ children, onClick=undefined }) => (
    <ContainerBackButton onClick={onClick}>
        <img src={arrow_left} />
        <p>{children}</p>
    </ContainerBackButton>
);

const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 26px;
    color: ${config.colors.primaryTitle};
    padding: 0;
    margin: 0;
`;

const Date = styled.h3`
    font-family: 'Montserrat';
    font-weight: 200;
    font-size: 15px;
    font-style: italic;
    color: ${config.colors.secondaryText};
    padding: 0;
    margin: 0;
    white-space: nowrap;
    width: min-content;
`;

const PostImage = styled.div`
    width: 100%;
    height: 50vh;
    background: ${config.colors.secondaryTitle} url(${props => props.src}) no-repeat scroll 30% 0%;
    background-size: cover;
    background-position: center;
    margin-top: 8px;
`;

const PostContent = styled.div`
    max-width: 100vw;

    // tamanho de imagens, h1, h2, padronizar tudo... cores
    p, h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat';
        color: ${config.colors.primaryTitle};
        // testar isso
        margin: 0;
        padding: 0;
    }

    p {
        color: ${config.colors.primaryText} !important;
        
        // media pro tamanho da fonte
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const ContainerLike = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    p {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
        color: ${config.colors.primaryText};

        b {
            cursor: pointer;
            font-weight: 600;
        }
    }
`;

const Like = ({ likes, logged=false, hasLiked=false, onClick=undefined }) => {
    return (
        <ContainerLike>
            <Icon cursor='pointer' image={logged && hasLiked ? heart_icon_activated : heart_icon} onClick={onClick} />
            <p>
                {logged ? (
                    hasLiked ? 
                        `Você e outras ${likes} pessoas curtiram essa publicação` :
                        <>{`${likes} pessoas curtiram essa publicação. `} 
                            <b onClick={onClick}>Clique para curtir!</b>
                        </>
                        //`${likes} pessoas curtiram essa publicação. Clique para curtir!`
                ) : `${likes} pessoas curtiram essa publicação. Entre na sua conta para poder curtir!`}
            </p>
        </ContainerLike>
    );
}

const Post = () => {
    const [post, setPost] = useState({});
    const [loadingPost, setLoadingPost] = useState(true);
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);

    const [logged, setLogged] = useState(true);
    const [hasLiked, setHasLiked] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    const submitSearch = () => {
        alert(searchValue);
    }

    const location = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log(location.name);
        setLoadingPost(true);
        setLoadingComments(true);

        setPost({
            id: 1,
            name: 'Testando o título',
            content: '<h1>Nathália nao eh op</h1><p>Ela afirma que é <b>op</b>, mas todos sabemos que nao é.</p><h2>matue de oculos escuros</h2><h3>escuros...</h3>',
            views: 20,
            likes: 13,
            comments: 17,
            created_at: '8 de outubro de 2019 às 09h28',
            tags: [{
                id: 1,
                name: 'Cuidados'
            }, {
                id: 2,
                name: 'Cães & Gatos'
            }]
        });
    }, []);

    const handleLike = () => {
        if (hasLiked)
            setPost({...post, likes: post.likes-1});
        else
            setPost({...post, likes: post.likes+1});

        setHasLiked(!hasLiked);
    }

    return (
        <ContainerPage>
            <Navbar currentPage={0} />

            {loadingPost ? (
                <ContentPage>
                    <ContentPage.Left>
                        <BackButton onClick={() => history.goBack()}>VOLTAR</BackButton>
                        
                        <Title>{post.name}</Title>
                        <div style={{
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Date>Publicado em {post.created_at}</Date>
                            <Icon image={eye_icon}>{post.views}</Icon>
                        </div>

                        <PostImage src={post.bannerImage || defaultImage} />
                        
                        <PostContent dangerouslySetInnerHTML={{ __html: post.content }}></PostContent>
                        
                        <Line width='70%' />

                        <Like 
                            likes={post.likes} 
                            hasLiked={hasLiked} 
                            logged={logged} o
                            onClick={() => handleLike()} 
                        />
                        {/* 
                            X botão de voltar
                            X titulo
                            X data + funcao de converter data
                            X visualizações
                            X foto
                            X div com html
                            X linha
                            like
                            incrementar view no refresh
                        */}

                        {/*
                            Gostou deixe um comentário
                            Comentário
                            Resposta
                        */}
                    </ContentPage.Left>

                    <ContentPage.Right>
                        <InputText 
                            name=''
                            value={searchValue}
                            onChange={setSearchValue}
                            search
                            onClick={submitSearch}
                            width='100%'
                        />

                        <SubTitle>Explore essas tags:</SubTitle>

                        <PopularPosts />
                    </ContentPage.Right>
                </ContentPage>
            ) : (
                <Loading />
            )}
            
            <Footer />
        </ContainerPage>
    );
}

export default Post;