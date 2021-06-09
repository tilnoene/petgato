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

const Users = () => {
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    //const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const users = [{
        name: 'Victor Manuel',
        created_at: '20-10-1397',
        id: 1,
        is_admin: true
    },
    ]

    const loadUsers = () => {
        // completar com usuários em branco caso não tenha 5 usuários
        return;
    }

    const deleteUser = ( id ) => {
        alert(id);
    }

    return (
        <ContainerPage>
            <Navbar backoffice currentPage={4} />

            <ContentPage>
                <div>
                    <SubTitle>BACKOFFICE</SubTitle>
                    <Title>Usuários</Title>
                </div>

                {loading ? (
                    <LoadingCat />
                ) : ( 
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo de Usuário</th>
                                <th>Data de Ingresso</th>
                                <th />
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.is_admin ? 'Administrador' : 'Usuário'}</td>
                                    <td>{convertDate(user.created_at)}</td>
                                    <td><Link to={`/backoffice/editar-usuario/${user.id}`}>Editar</Link></td>
                                    <td><a onClick={() => deleteUser(user.id)}>Excluir</a></td>
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

            <Footer />
        </ContainerPage>
    );
}

export default Users;