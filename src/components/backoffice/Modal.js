import React from 'react';
import styled from 'styled-components';

const ContainerPage = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerModal = styled.div`
    width: 600px;
    height: 320px;
    background-color: white;
`;

const Modal = ({ content, closeModal=undefined, report=false }) => {
    const verifyClick = ( target ) => {
        if (target.offsetWidth !== 600) closeModal();
    }
    
    if (report) return (
        <ContainerPage onClick={e => verifyClick(e.target)}>
           <ContainerModal>
                a
            </ContainerModal>
        </ContainerPage>
    );
    
    // message
    return (
        <ContainerPage onClick={e => verifyClick(e.target)}>
            <ContainerModal>
                a
            </ContainerModal>
        </ContainerPage>
    );
}

export default Modal;