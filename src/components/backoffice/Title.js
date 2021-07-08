import styled from 'styled-components';
import config from '../../config.json';

const Title = styled.h1`
    font-family: 'Montserrat';
    font-size: 28px;
    font-weight: 700;
    color: ${config.colors.secondaryTitle};
    padding: 0;
    margin: 0;
`;

export default Title;