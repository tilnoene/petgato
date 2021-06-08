import styled from 'styled-components';
import config from '../../config.json';

const Table = styled.table`
    width: 100%;
    font-family: 'Montserrat';
    font-size: 16px;
    border-collapse: collapse;
    
    thead {
        text-align: left;
        color: ${config.colors.primaryText};

        td:nth-child(1) {
            width: 100px;
        }

        td:nth-child(2) {
            width: 10px;
        }
    }

    td a {
        font-weight: 600;
        color: ${config.colors.primaryTitle};
        text-decoration: none;
        cursor: pointer;
    }

    td, th {
        border: 1px solid #ddd;
        border-right: none;
        border-left: none;
        padding: 10px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    tbody tr:nth-child(odd) {
        background-color: #f2f2f2;
    }

    tbody tr:hover {
        background-color: #ddd;
    }
`;

export default Table;