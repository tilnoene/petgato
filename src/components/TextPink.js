import styled from 'styled-components';
import config from '../config.json';

const TextPink = styled.span`
    a, p {
        padding: 0;
        margin: 0;
        text-decoration: none;
        outline: none;
        color: ${config.colors.primaryTitle};
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 16px;
    }
`;

export default TextPink;