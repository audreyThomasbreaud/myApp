import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Princessee from "../pics/Princessee.png";
import { useParams } from "react-router";
import Article from "../interface/Article.interface";
import { Button, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${Princessee})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      position: "absolute",
   },
  },
  page: {
    alignItems: 'center',
  },
  titre: {
      display: 'flex',
      position: "relative",
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(15),
      color:'#d81b60',
      fontSize:72,
      alignContent: 'center',
  },
  button:{
    marginBottom: theme.spacing(5),
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:'#f48fb1',
    width:'100em',
    backgroundColor:'#d81b60'

  },
  buttonun: {
      marginBottom: theme.spacing(5),
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#f48fb1',
      width:'100em',
      backgroundColor:'#d81b60'
  },
})
);

const DeleteArticle = () => {
  const [articles, setArticles] = useState<Article>(
    {id:'',
    title: '',
    content:'',
    auteur:'',
    pic:''}
  )
  const paramUrl: any = useParams();
  const classes = useStyles();

  async function Delete() {
  return fetch("http://127.0.0.1:3000/articles/"+`${paramUrl.id}`,
    {
      method: "DELETE",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      },
    })
  };

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.page}>
        <h1 className={classes.titre}>EFFACER L'ARTICLE : </h1>
        <div> 
            <Button className={classes.button} onClick={() => {Delete()}}>
            Confirmer la suppression de l'article 
            </Button>
            <Button className={classes.buttonun} href={"/AfficherListe/"}>
            Retour à la liste
            </Button>
        </div>
      </div>
    </Container>
  );
}

export default DeleteArticle;