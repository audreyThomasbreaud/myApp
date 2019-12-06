import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Princessee from '../pics/Princessee.png';
import Articles from '../component/articles';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${Princessee})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      position:'absolute',
      width:'100%',
      height:'100%'
    },
  },
    titre: {
      marginTop: theme.spacing(15),
      color:'#d81b60',
      fontSize:72,
      textAlign:'center'
    },
})
);


export default function AfficherListe() {
  const classes = useStyles();

  return (
    <div>
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <h1 className={classes.titre}>LISTE DES ARTICLES :</h1>
      <div><Articles/></div>
    </Grid>
    </Grid>
    </div>
);}



