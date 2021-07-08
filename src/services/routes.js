//import { useState } from 'react';
import { BrowserRouter, Route, Switch/*, Redirect*/ } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Recovery from '../pages/Recovery';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Post from '../pages/Post';

/*
const PrivateRoute = ({ component: Component, ... rest}) => {
    const [logged, setLogged] = useState(isAuthenticated().then(response => setLogged(response)));
    
    return (
        <Route { ... rest} render={props => (
            logged ? (
                <Component { ... props} />
            ) : (
                <Redirect to={{ pathname: '/nao-permitido', state: { from: props.location } }} />
            )
        )} />
    );
}

const BackofficeRoute = ({ component: Component, ... rest}) => {
    const [logged, setLogged] = useState(isAuthenticated().then(response => setLogged(response)));
    const [admin, setAdmin] = useState(isAdmin().then(response => setAdmin(response)));
    
    return (
        <Route { ... rest} render={props => (
            logged && admin ? (
                <Component { ... props} />
            ) : (
                <Redirect to={{ pathname: '/nao-permitido', state: { from: props.location } }} />
            )
        )} />
    );
}*/

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/cadastro' component={() => <SignUp />} />
            <Route exact path='/recuperar-senha' component={() => <Recovery />} />
            <Route exact path='/sobre' component={() => <About />} />
            <Route exact path='/contato' component={() => <Contact />} />
            <Route exact path='/publicacao/:name' component={() => <Post />} />
            {/*
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/cadastro' component={() => <Cadastro />} />
            <Route exact path='/recuperar-senha' component={() => <RecuperarSenha />} />
            <Route exact path='/sobre' component={() => <Sobre />} />
            <Route exact path='/contato' component={() => <FaleConosco />} />
            <Route exact path='/nao-permitido' component={() => <PaginaErro error={1} />} />
            <Route exact path='/nao-encontrada' component={() => <PaginaErro error={2} />} />
            <Route exact path='/post/:id' component={() => <PaginaPublicacao />} />
            
            <Route exact path='/erro' component={() => <PaginaErro />} />
            <Route exact path='/teste' component={() => <PaginaPublicacao />} />

            <PrivateRoute exact path='/editar-perfil' component={() => <EditarPerfil />} />

            <BackofficeRoute exact path='/denuncias' component={() => <Denuncias />} />
            <BackofficeRoute exact path='/publicacoes' component={() => <Publicacoes />} />
            <BackofficeRoute exact path='/criar-publicacao' component={() => <CriarPublicacao />} />
            <BackofficeRoute exact path='/editar-publicacao/:id' component={() => <EditarPublicacao />} />
            <BackofficeRoute exact path='/usuarios' component={() => <Usuarios />} />
            <BackofficeRoute exact path='/tags' component={() => <Tags />} />
            <BackofficeRoute exact path='/criar-tag' component={() => <CriarTag />} />
            <BackofficeRoute exact path='/editar-tag/:id' component={() => <EditarTag />} />
            <BackofficeRoute exact path='/editar-usuario' component={() => <EditUser />} />
            <BackofficeRoute exact path='/mensagens' component={() => <Mensagens />} />

            <Route path='/' component={() => <PaginaErro error={2} />} />
            */}
        </Switch>
    </BrowserRouter>
);

export default Routes;