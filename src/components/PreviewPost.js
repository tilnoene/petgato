import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../config.json';

import ButtonWhite from './ButtonWhite';
import Icon from './Icon';

import default_post_image from '../assets/images/recovery_cat.jpg';
import heart_icon from '../assets/heart-icon-1.svg';
import comment_icon from '../assets/comment-alt-icon.svg';
import eye_icon from '../assets/eye-icon.svg';

const ContainerPreview = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
`;

const PostImage = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${config.colors.secondaryTitle};
    background-image: url(${props => props.bannerImage || default_post_image});
    background-position: center;
    background-size: cover;

    cursor: pointer;
`;

const ContainerRight = styled.div`
    width: 80%;
    padding-left: 18px;

    display: grid;
    grid-template-rows: 35px auto 60px;

    a {
        outline: none;
        text-decoration: none;
    }
`;

const ContainerTags = styled.div`
    height: 35px;
    width: 100%;
    
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 400;
    color: ${config.colors.secondaryText};

    gap: 10px;

    p {
        margin: 0;
        padding: 0;
    }
`;

const Tag = styled.div`
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 600;
    color: ${config.colors.primaryTitle};
    background-color: ${config.colors.secondaryBackground};
    padding: 2px 6px;
    cursor: pointer;
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
`;

const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 22px;
    color: ${config.colors.primaryTitle};
    padding: 0;
    margin: 0;
`;

const Content = styled.div`
    outline: none;
    
    p {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 15px;
        color: ${config.colors.primaryText};
    }
`;

const ContainerInfo = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 22px;
`;

const PreviewPost = ({ post }) => (
    <ContainerPreview>
        <PostImage />
        <ContainerRight>
            <ContainerTags>
                <p><i>Tags:</i></p>
                {post.tags.map(tag => (
                    // colocar para o link de busca com query parameters
                    <Link key={tag.id} to={`/tags/${tag.id}`}><Tag>{tag.name}</Tag></Link>
                ))}
            </ContainerTags>

            <ContainerText>    
                <Link to={`/publicacao/${post.url_link}`}><Title>{post.name}</Title></Link>
                <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
            </ContainerText>

            <ContainerInfo>
                <Link to={`/publicacoes/${post.url_link}`}><ButtonWhite>LEIA MAIS</ButtonWhite></Link>
                <Icon image={heart_icon}>{post.likes}</Icon>
                <Icon image={comment_icon}>{post.comments}</Icon>
                <Icon image={eye_icon}>{post.views}</Icon>
            </ContainerInfo>
        </ContainerRight>
    </ContainerPreview>
);

export default PreviewPost;