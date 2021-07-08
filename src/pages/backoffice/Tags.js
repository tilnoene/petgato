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

const Tags = () => {
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    //const [tags, setTags] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const tags = [{},{}];

    const deletetag = ( id ) => {
        alert(id);
    }

    return (
        <ContainerPage>
            <Navbar backoffice currentPage={3} />

            <ContentPage>
                <div>
                    <SubTitle>BACKOFFICE</SubTitle>
                    <Title>Todas as tags</Title>
                </div>

                {loading ? (
                    <LoadingCat />
                ) : ( 
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nº de Publicações</th>
                                <th>Nome</th>
                                <th />
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {tags.map(tag => (
                                <tr key={tag.id}>
                                    <td>{tag.id}</td>
                                    <td>{tag.post_count}</td>
                                    <td>{tag.name}</td>
                                    <td><Link to={`/backoffice/editar-tag/${tag.id}`}>Editar</Link></td>
                                    <td><a onClick={() => deletetag(tag.id)}>Excluir</a></td>
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

export default Tags;