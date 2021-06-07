import styled from 'styled-components';
import config from '../config.json';

const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 30px;
    color: ${config.colors.primaryTitle};
    padding: 0;
    margin: 0;
`;

export default Title;