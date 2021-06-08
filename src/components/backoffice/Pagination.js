import React from 'react';
import styled from 'styled-components';
import config from '../../config.json';

const ContainerPagination = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`;

const ContentPagination = styled.div`
    width: 200px;
    height: 40px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Button = styled.button`
    width: 40px;
    height: 40px;

    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.selected ? 'white' : config.colors.primaryTitle};
    background-color: ${props => props.selected ? config.colors.primaryTitle : config.colors.primaryBackground};
    cursor: pointer;

    border: none;
    outline: 1px solid #909090;

    &:disabled {
        color: #909090;
        background-color: #ddd;
        cursor: not-allowed;
    }
`;

const Pagination = ({ currentPage=1, totalPages=3, prevPage=undefined, nextPage=undefined, specificPage=undefined }) => {
    
    if (currentPage === 1) return (
        <ContainerPagination>
            <ContentPagination>
                <Button disabled>«</Button>
                <Button selected>1</Button>
                <Button disabled={!(totalPages >= 2)}>2</Button>
                <Button disabled={!(totalPages >= 3)}>3</Button>
                <Button disabled={!(totalPages >= 2)} onClick={nextPage}>»</Button>
            </ContentPagination>
        </ContainerPagination>
    );

    if (currentPage === 2) return (
        <ContainerPagination>
            <ContentPagination>
                <Button onClick={prevPage}>«</Button>
                <Button onClick={prevPage}>1</Button>
                <Button selected>2</Button>
                <Button disabled={!(totalPages >= 3)} onClick={nextPage}>3</Button>
                <Button disabled={!(totalPages >= 3)} onClick={nextPage}>»</Button>
            </ContentPagination>
        </ContainerPagination>
    );

    if (currentPage === totalPages) return (
        <ContainerPagination>
            <ContentPagination>
                <Button onClick={prevPage}>«</Button>
                <Button onClick={specificPage}>{currentPage-2}</Button>
                <Button onClick={prevPage}>{currentPage-1}</Button>
                <Button selected>{currentPage}</Button>
                <Button disabled>»</Button>
            </ContentPagination>
            </ContainerPagination>
    );

    return (
        <ContainerPagination>
            <ContentPagination>
                <Button onClick={prevPage}>«</Button>
                <Button onClick={prevPage}>{currentPage-1}</Button>
                <Button selected>{currentPage}</Button>
                <Button onClick={nextPage}>{currentPage+1}</Button>
                <Button onClick={nextPage}>»</Button>
            </ContentPagination>
        </ContainerPagination>
    );
}

export default Pagination;