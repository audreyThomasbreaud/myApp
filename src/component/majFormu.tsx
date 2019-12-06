import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button, Grid } from "@material-ui/core";
import Princessee from "../pics/Princessee.png";
import { useParams } from "react-router";
import Article from "../interface/Article.interface";
import classes from "*.module.css";
// import MajArticles from "../component/majArticle";

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundImage: `url(${Princessee})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "absolute",
        width: "100%",
        height: "100%"
     },
    },
    titre: {
        marginTop: theme.spacing(15),
        color:'#d81b60',
        marginLeft:'5%',
        fontSize:72,
    },
  })
  );

const MajFormu = () => {
   

  return(
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
    <h1 className={classes.titre}> VOTRE ARTICLE EST MIS A JOUR </h1>
    </Grid>
    </Grid>
    </div>
  )
};

export default MajFormu;