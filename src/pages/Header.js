import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isAuthenticated, isAdmin } from '../services/auth';

const Temp = styled.div`
    background: blue;
`;

const Header = () => {
    const [loadingHeader, setLoadingHeader] = useState(false);
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [userAdmin, setUserAdmin] = useState(false);
    
    useEffect(() => {
        isAuthenticated()
            .then(logged => {
                setUserAuthenticated(logged);
                console.log(logged);
                if (logged) {
                    isAdmin()
                        .then(admin => {
                            setUserAdmin(admin);
                        });
                }
            });
        setLoadingHeader(true);
        console.log(userAuthenticated);
        console.log(userAdmin);
    }, []);

    return (
        <>
            {loadingHeader ? 
                <Temp>
                    Normal
                </Temp>
            : (
                <Temp>
                    Normal
                    {userAuthenticated && <div>Autenticado</div>}
                    {userAdmin && <div>Admin</div>}
                </Temp>
            )}
        </>
    );
}

export default Header;