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

const Reports = () => {
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    //const [reports, setReports] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const reports = [{},{}];

    const showReport = ( report ) => {
        alert(report.id);
    }

    return (
        <ContainerPage>
            <Navbar backoffice currentPage={5} />

            <ContentPage>
                <div>
                    <SubTitle>BACKOFFICE</SubTitle>
                    <Title>Denúncias</Title>
                </div>

                {loading ? (
                    <LoadingCat />
                ) : ( 
                    <Table>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Data</th>
                                <th>Publicação</th>
                                <th>Autor do Comentário</th>
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {reports.map(report => (
                                <tr key={report.id}>
                                    <td>{report.id}</td>
                                    <td>{convertDate(report.created_at)}</td>
                                    <td><Link to={`/${report.post && report.post.url_link}`}>{report.post && report.post.name}</Link></td>
                                    <td>{report.author}</td>
                                    <td><a onClick={() => showReport(report)}>Exibir</a></td>
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

export default Reports;