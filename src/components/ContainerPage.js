import styled from 'styled-components';

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

export default ContainerPage;