import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

import default_post_image from '../assets/images/recovery_cat.jpg';

const ContainerPreview = styled.div`
    width: 100%;
    height: 200px;
    
    background-color: lightblue;
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

const Preview = ({ post }) => (
    <ContainerPreview>
        <PostImage />
    </ContainerPreview>
);

export default Preview;