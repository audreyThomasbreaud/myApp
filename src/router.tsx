import React from 'react';
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import SignIn from './pages/connect';
 import FormArticle from './pages/formArticle';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Home from './pages/home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import {PrivateRoute} from './component/protect';
// import {Articles} from './pages/AfficherListe';
// import usePostArticleService from './component/list';
import AfficherListe from './pages/AfficherListe';
import FrontUser from './pages/frontuser';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        },
    },
        titre: {
          color: '#f8bbd0',
          fontSize:72,
        },

        Navlink: {
          color: 'white',
          fontSize:26,
          textDecoration: 'none'
        },

        title: {
          flexGrow: 2,
          color: 'red'
        },
}));

const Router: React.FC=() => {
    const classes = useStyles();
      return(
        <Container component="main" maxWidth="xl">
          <BrowserRouter>
            <header>
              <div >
                <AppBar style={{ backgroundColor: '#d81b60' }}>
                  <Toolbar>
                    <Typography variant="h5" className={classes.title}><Link to ="/" className= {classes.Navlink}>Accueil</Link></Typography>
                    <Typography variant="h5" className={classes.title}><Link to ="/AfficherListe" className= {classes.Navlink}>Liste</Link></Typography>
                    <Typography variant="h5" className={classes.title}><Link to ="/FormArticle" className= {classes.Navlink}>Créer un article</Link></Typography>
                    <Typography variant="h5" className={classes.title}><Link to ="/FrontUser" className= {classes.Navlink}>Front User</Link></Typography>
                    <Button color="inherit"><Link to ="/SignIn" className= {classes.Navlink}>Se connecter</Link></Button>
                  </Toolbar>
                </AppBar>
              </div>
            </header>

              <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/AfficherListe">
                    <AfficherListe/>
                </Route>

                <Route exact path="/SignIn">
                  <SignIn/>
                </Route>

                <Route exact path="/FormArticle">
                  <FormArticle/>
                </Route>

                <Route exact path="/FrontUser">
                  <FrontUser/>
                </Route>

                </Switch>
          </BrowserRouter>
        </Container>
    );
}

export default Router;