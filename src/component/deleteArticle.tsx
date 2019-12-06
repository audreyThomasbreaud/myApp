import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Princessee from "../pics/Princessee.png";
import { useParams } from "react-router";
import Article from "../interface/Article.interface";
import { Button, Grid, Modal } from "@material-ui/core";


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
  page: {
    // alignItems: 'center',
  },
  titre: {
      // display: 'flex',
      // position: "relative",
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(15),
      color:'#d81b60',
      fontSize:72,
      // alignContent: 'center',
  },
  buttonun: {
      marginBottom: theme.spacing(5),
      // position: "relative",
      // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#f48fb1',
      width:'100%',
      backgroundColor:'#d81b60'
  },
  modal:{
    position: 'absolute',
    width: 400,
    backgroundImage: `url(${Princessee})`,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
 
  titreun:{
    width:"100%",
    alignContent:"100%"
  }
})
);

const DeleteArticle = () => {
  const [articles, setArticles] = useState<Article>(
    {id:'',
    title: '',
    content:'',
    auteur:'',
    pic:''}
  );
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const paramUrl: any = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  async function MajData() {
    return fetch("http://127.0.0.1:3000/articles/"+`${paramUrl.id}`,
      {
        method: "GET",
        cache: "default"
      })
  }

  useEffect(() => {
    MajData()
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setArticles(res);
      });
  },
  []);

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
    .then((res:any)=>{
      handleOpen();
  })
  };

  return (
    <Grid>
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.modal}>
            <h2 id="simple-modal-title"> Votre article a bien été supprimé </h2>
            <Button href="/AfficherListe">Retour à la liste</Button>

          </div>
        </Modal>
        <Grid item xs={12} className={classes.titreun}>
            <h1 className={classes.titre}>EFFACER L'ARTICLE : </h1>
                  <h2>{articles.title}</h2>
        </Grid>

                  <div> 
                  <Grid item xs={12}>
                    <Button className={classes.buttonun} onClick={() => {Delete()}}>
                    Confirmer la suppression de l'article 
                    </Button>
                    <Button className={classes.buttonun} href={"/AfficherListe/"}>
                    Retour à la liste
                    </Button>
                    </Grid>
                  </div>

        </Grid>
  );
}

export default DeleteArticle;