import React, {useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    picListe: {
      height:'15em',
      alignItems:'center',
      width:'15em'
    },
    title:{
      color: '#d81b60',
    },
    button: {
      color: '#f48fb1',
      backgroundColor: '#d81b60',
    },
    buttonun: {
      color: '#d81b60',
      backgroundColor: '#f48fb1',
      marginRight:'1em',
    },
    idListe:{
      display:'none',
    },
    auteur:{
      color: '#d81b60'
    },
parent:{
},
}));


const Articles = () => {
  const [hasError] = useState(false);
  const [articles, setArticles] = useState([]);
  const classes = useStyles();

  async function fetchData() {
    return fetch (`http://127.0.0.1:3000/articles`,
    {
        method: 'GET',
        cache: 'default',
    })
  }

  useEffect(() => {
    fetchData()
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      setArticles(res);
    });
  }, []);


  return (
    <div>
      {articles &&
      articles.map((article: any) => (
        <div className={classes.parent} key={article.id}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <div className={classes.idListe}>{article.id} </div>
              </Grid>
              <Grid item xs={4}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <img className={classes.picListe} src={article.pic} alt=" "></img>
              </Grid>
              <Grid item xs={4}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <h1 className={classes.title}>{article.title}</h1>
              <p>{article.content}</p>
              <p className={classes.auteur}>{article.auteur}</p>
              </Grid>
              <Grid item xs={4}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <div>
                <Button
                color="secondary"
                className={classes.buttonun}
                startIcon={<UpdateIcon />}
                href= {"/MajArticle/"+article.id}
                value={article.id}
                > Mettre à jour
                </Button>
                <Button
                color="secondary"
                startIcon={<DeleteIcon />}
                value={article.id}
                href= {"/deleteArticle/"+article.id}
                > Supprimer
                </Button>
              </div>
              </Grid>
            </Grid>
          </div>
        </div>
      ))}
      {hasError && <span> Has error: {hasError}</span>}
    </div>
  );
};
export default Articles;











