import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Princessee from '../pics/Princessee.png';
import ArticlesUser from '../component/listUser';
import { Grid } from '@material-ui/core';



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
        // display: 'flex',
        // position: "relative",
        // marginBottom: theme.spacing(8),
        marginTop: theme.spacing(15),
        color:'#d81b60',
        fontSize:72,
        textAlign:'center'
    },

      contenu:{
        // color:'#212121',
        // position:'relative',
        // marginLeft:'25%',
        
      }

}));


export default function FrontUser() {
  const classes = useStyles();

  return (
     <Grid container spacing={2}>>
      <div  className={classes.contenu}>
      <Grid item xs={12}>
            <h1 className={classes.titre}>BIENVENUE SUR CE BLOG</h1>
            </Grid>
        <div><ArticlesUser/></div>
      </div>
    </Grid>
);}



