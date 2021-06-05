import React from 'react';
import styled from 'styled-components';
import config from '../config.json';
//import { isAuthenticated, isAdmin } from '../services/auth';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContainerPage = styled.div`
    min-height: 100vh;
    background-color: ${config.colors.primaryBackground};
`;

const Home = () => {
    // colocar isso no Header...
    // esperar o header carregar ou então não, carregar o padrão mesmo enquanto os dados não chegam

    // checks the user's privileges for the header
    /*useEffect(() => {
        isAuthenticated()
            .then(logged => {
                setUserAuthenticated(logged);

                if (logged) {
                    isAdmin()
                        .then(admin => {
                            setUserAdmin(admin);
                        });
                }
            });
        setLoadingHeader(true);
    }, []);*/

    return (
        <ContainerPage>
            <Navbar />
            <p>oi</p>
            <p>oi</p>
            <Footer />
        </ContainerPage>
    );
}

export default Home;