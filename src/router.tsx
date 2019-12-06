import React from 'react';
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom';
import SignIn from './pages/connect';
 import FormArticle from './pages/formArticle';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './pages/home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import {PrivateRoute} from './component/protect';
import AfficherListe from './pages/AfficherListe';
import FrontUser from './pages/frontuser';
import MajArticles from './component/majArticle';
import DeleteArticle from './component/deleteArticle';
import { Grid } from '@material-ui/core';
import SimpleModal from './component/modal';
// import DeleteArticles from './component/delete';



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
          <BrowserRouter>
          <Grid container spacing={2}>
          <Grid item xs={12}> 
            <header>
              <div >
                <AppBar style={{ backgroundColor: '#d81b60' }}>
                  <Toolbar>
                  <Grid item xs={2}>
                    <Typography variant="h5" className={classes.title}><Link to ="/" className= {classes.Navlink}>Accueil</Link></Typography>
                  </Grid>
                  <Grid item xs={2}> 
                    <Typography variant="h5" className={classes.title}><Link to ="/AfficherListe" className= {classes.Navlink}>Liste</Link></Typography>
                    </Grid>   
                    <Grid item xs={2}> 
                    <Typography variant="h5" className={classes.title}><Link to ="/FormArticle" className= {classes.Navlink}>Créer un article</Link></Typography>
                    </Grid>
                    <Grid item xs={2}>  
                    <Typography variant="h5" className={classes.title}><Link to ="/FrontUser" className= {classes.Navlink}>Front User</Link></Typography>
                    </Grid>
                    {/* <Typography variant="h5" className={classes.title}><Link to ="/MajArticle" className= {classes.Navlink}>Mise à jour</Link></Typography> */}
                    <Grid item xs={2}>
                   <Button color="inherit"><Link to ="/SignIn" className= {classes.Navlink}>Se connecter</Link></Button>
                   </Grid>
                  </Toolbar>
                </AppBar>
              </div>
            </header>
            </Grid>
            </Grid>

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
                <Route  path="/DeleteArticle/:id">
                    <DeleteArticle/>
                </Route>
                <Route path="/MajArticle/:id">
                    <MajArticles/>
                </Route>
                <Route path="/modal">
                    <SimpleModal/>
                </Route>

                </Switch>
          </BrowserRouter>
        
    );
}


export default Router;