import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../../config.json';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoadingCat from '../../components/LoadingCat';
import Title from '../../components/backoffice/Title';
import SubTitle from '../../components/backoffice/SubTitle';
import Table from '../../components/backoffice/Table';
import Pagination from '../../components/backoffice/Pagination';
import Modal from '../../components/backoffice/Modal';

import { convertDate } from '../../services/functions';

const ContainerPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${config.colors.primaryBackground || 'white'};

    display: grid;
    grid-template-rows: 90px calc(100% - 155px) 65px;

    @media(max-width: 1280px) {
        grid-template-rows: 80px calc(100% - 145px) 65px;
    }

    @media(max-width: 768px) {
        grid-template-rows: 80px calc(100% - 125px) 45px;
    }
`;

const ContentPage = styled.div`
    margin: 25px auto;
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Messages = () => {
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    //const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    const messages = [{
        id: 1,
        author: 'Victor',
        description: 'Testando tudo isso',
        email: 'victor@victor'
    }, {
        id: 2,
        author: 'Daniela',
        description: 'Nada nao',
        email: 'danilinda@gmail'
    }];

    const deleteMessage = ( id ) => {
        alert(id);
    }

    const showMessage = ( message ) => {
        setCurrentMessage(message);
        setShowModal(true);
    }

    return (
        <ContainerPage>
            <Navbar backoffice currentPage={6} />

            <ContentPage>
                <div>
                    <SubTitle>BACKOFFICE</SubTitle>
                    <Title>Mensagens de Contato</Title>
                </div>

                {loading ? (
                    <LoadingCat />
                ) : ( 
                    <Table>
                        <thead>
                            <tr>
                                <th>Remetente</th>
                                <th>Descrição</th>
                                <th>Data de Envio</th>
                                <th />
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {messages.map(message => (
                                <tr key={message.id}>
                                    <td>{message.author}</td>
                                    <td>{message.description}</td>
                                    <td>{convertDate(message.created_at)}</td>
                                    <td><a onClick={() => showMessage(message)}>Exibir</a></td>
                                    <td><a onClick={() => deleteMessage(message.id)}>Excluir</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

            <Pagination 
                currentPage={page} 
                totalPages={totalPages}
                prevPage={() => setPage(page-1)}
                nextPage={() => setPage(page+1)}
                prev2Page={() => setPage(page-2)}
                next2Page={() => setPage(page+2)}
            />
            </ContentPage>

            {showModal && <Modal content={currentMessage} closeModal={() => setShowModal(false)} /> }
            
            <Footer />
        </ContainerPage>
    );
}

export default Messages;