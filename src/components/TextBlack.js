import styled from 'styled-components';
import config from '../config.json';

const TextBlack = styled.p`
    padding: 0;
    margin: 0;
    color: ${config.colors.secondaryText};
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
`;

export default TextBlack;