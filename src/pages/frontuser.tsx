import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princessee from '../pics/Princessee.png';
import ArticlesUser from '../component/listUser';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundImage: `url(${Princessee})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position:'absolute',
        },
      },

        titre: {
          color:'#d81b60',
          fontSize:62,
          marginTop: theme.spacing(15),
          position:'relative',
          // marginLeft:'25%',
      },

      contenu:{
        color:'#212121',
        position:'relative',
        marginLeft:'25%',
        
      }

}));


export default function FrontUser() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <div  className={classes.contenu}>
        <h1 className={classes.titre}>BIENVENUE SUR CE BLOG:</h1>
        <div><ArticlesUser/></div>
      </div>
    </Container>
);}



