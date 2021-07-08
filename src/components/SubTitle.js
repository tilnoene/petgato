import styled from 'styled-components';
import config from '../config.json';

const SubTitle = styled.h2`
    font-family: 'Montserrat';
    font-weight: 300; 
    font-size: 22px;
    color: ${config.colors.primaryText};
    padding: 0;
    margin: 0;
`;

export default SubTitle;