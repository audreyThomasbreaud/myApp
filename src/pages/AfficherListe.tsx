import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princessee from '../pics/Princessee.png';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import UpdateIcon from '@material-ui/icons/Update';
import Articles from '../component/articles';



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
          // display: 'flex',
          // flexDirection: 'column',
          marginTop: theme.spacing(15),
          alignItems:'center',
          position:'relative',
      },

}));


export default function AfficherListe() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <h1 className={classes.titre}>LISTE DES ARTICLES :</h1>
      <div><Articles/></div>
    </Container>
);}



