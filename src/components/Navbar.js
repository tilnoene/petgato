import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import config from '../config.json';

import petgato_logo from '../assets/petgato-logo-white.svg';

const ContainerNavbar = styled.div`
    width: 100%;
    color: white;
    background-color: ${config.colors.primaryTitle};
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
    font-family: 'Montserrat';

    height: 90px;

    @media(max-width: 1280px) {
        height: 80px;
    }
`;

const ContainerMenu = styled.div`
    display: flex;
    align-items: center;

    padding-right: 80px;
    gap: 30px;
`;

const Option = styled.p`
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    font-weight: ${props => props.selected ? 600 : 400};

    a {
        color: white;
        text-decoration: none;
    }

    font-size: 24px;

    @media(max-width: 1280px) {
        font-size: 20px;
    }
`;

const PetgatoLogo = styled.img`
    cursor: pointer;
    width: 50%;
    padding-left: 40px;
`;

const Navbar = ({ currentPage=1, backoffice=false }) => {
    // verifica se é admin

    return (
        <ContainerNavbar>
            <Link to='/'><PetgatoLogo src={petgato_logo} /></Link>

            {!backoffice ? (
                <ContainerMenu>
                    <Option selected={currentPage === 1} ><Link to='/'>Página Inicial</Link></Option>
                    <Option selected={currentPage === 2} ><Link to='/sobre'>Sobre Nós</Link></Option>
                    <Option selected={currentPage === 3} ><Link to='/contato'>Fale Conosco</Link></Option>
                    
                    <Option selected={currentPage === 3} ><Link to='/login'>Entrar</Link></Option>

                </ContainerMenu>
            ) : (
                <ContainerMenu>
                    <Option selected={currentPage === 1} ><Link to='/'>Página Inicial</Link></Option>
                    <Option selected={currentPage === 2} ><Link to='/backoffice/publicacoes'>Publicações</Link></Option>
                    <Option selected={currentPage === 3} ><Link to='/backoffice/usuarios'>Usuários</Link></Option>
                    <Option selected={currentPage === 4} ><Link to='/backoffice/denuncias'>Denúncias</Link></Option>
                    <Option selected={currentPage === 5} ><Link to='/backoffice/mensagens'>Mensagens</Link></Option>
                </ContainerMenu>
            )}
            
        </ContainerNavbar>
    );
}

export default Navbar;