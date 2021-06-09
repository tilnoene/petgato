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

import { convertDate, convertTags } from '../../services/functions';

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

const Posts = () => {
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    //const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const posts = [{
        id: 1,
        name: 'Testando o título',
        content: '<p>Esse post é um <b>teste</b> apenas.</p>',
        views: 20,
        likes: 13,
        comments: 17,
        created_at: '20-10-1024',
        tags: [{
            id: 1,
            name: 'Cuidados'
        }, {
            id: 2,
            name: 'Cães & Gatos'
        }]
    }, {
        id: 2,
        name: 'Lê aqui em baixo',
        content: '<p>Lê a barra de pesquisa</p>',
        views: 20,
        likes: 13,
        comments: 17,
        created_at: '20-10-1024',
        tags: [{
            id: 1,
            name: 'Erik Gay'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }]
    }, {
        id: 3,
        name: 'Lê aqui em baixo',
        content: '<p>Lê a barra de pesquisa</p>',
        views: 20,
        likes: 13,
        comments: 17,
        created_at: '20-10-1024',
        tags: [{
            id: 1,
            name: 'Erik Gay'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }]
    }, {
        id: 4,
        name: 'Lê aqui em baixo nao porque carro helicoptero divulgação',
        content: '<p>Lê a barra de pesquisa</p>',
        views: 20,
        likes: 13,
        comments: 17,
        created_at: '20-10-1024',
        tags: [{
            id: 1,
            name: 'Erik Gay'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }]
    }, {
        id: 5,
        name: 'Lê aqui em baixo',
        content: '<p>Lê a barra de pesquisa</p>',
        views: 20,
        likes: 13,
        comments: 17,
        created_at: '20-10-1024',
        tags: [{
            id: 1,
            name: 'Erik Gay'
        }, {
            id: 2,
            name: 'Cães & Caio'
        }]
    }];

    const deletePost = ( id ) => {
        alert(id);
    }

    return (
        <ContainerPage>
            <Navbar backoffice currentPage={2} />

            <ContentPage>
                <div>
                    <SubTitle>BACKOFFICE</SubTitle>
                    <Title>Todas as publicações</Title>
                </div>

                {loading ? (
                    <LoadingCat />
                ) : ( 
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Data</th>
                                <th>Título</th>
                                <th>Tags</th>
                                <th />
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{convertDate(post.created_at)}</td>
                                    <td><Link to={`/${post.url_link}`}>{post.name}</Link></td>
                                    <td>{convertTags(post.tags)}</td>
                                    <td><Link to={`/backoffice/editar-publicacao/${post.id}`}>Editar</Link></td>
                                    <td><a onClick={() => deletePost(post.id)}>Excluir</a></td>
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

export default Posts;