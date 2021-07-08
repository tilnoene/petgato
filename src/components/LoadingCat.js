import React from 'react';
import styled from 'styled-components';

import loading_cat from '../assets/loading-cat.gif';

const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 241px;
`;

const Loading = styled.img`
    width: 120px;
`;

const LoadingCat = () => (
    <ContainerLoading>
        <Loading src={loading_cat} />
    </ContainerLoading>
);

export default LoadingCat;