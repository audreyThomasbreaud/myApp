import React, {useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import { useParams } from 'react-router';

const useStyles = makeStyles(theme => ({

  pic: {
    height:'15em',
    marginRight:'4em',
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
  marginRight:'1em'
  
},
parent:{
  display: 'flex',
  width:'100%',
  marginBottom:'2%',
  alignItems:'center',
  alignContent:'center'
},
bouton:{
display:'flex',
alignItems:'center',
alignContent:'center',
marginLeft:'5em',
},
id:{
display:'none',
},

article:{
  width:'50em',
  color:'black',
  alignItems:'center'
}
}));


const Articles = () => {
  const [hasError] = useState(false);
  const [articles, setArticles] = useState([]);
  const classes = useStyles();
  const paramUrl: any = useParams();

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

 
    // async function Delete() {
    // return fetch("http://127.0.0.1:3000/articles/"+`${paramUrl.id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //     },
    //   })
    // }

  return (
    <div>
      {articles &&
      articles.map((article: any) => (
        <div className={classes.parent} key={article.id}>
          <div className={classes.id}>{article.id} </div>
          <img className={classes.pic} src={article.pic} alt=" "></img>
            <div>
            <h1 className={classes.title}>{article.title}</h1>
            <p className={classes.article}>{article.content}</p>
            <p>{article.auteur}</p>
            </div>
            <div className={classes.bouton}>

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
              className={classes.button}
              startIcon={<DeleteIcon />}
               value={article.id}
               href= {"/deleteArticle/"+article.id}
              //  onClick={() => {Delete()}}
              > Supprimer
              </Button>
            </div>
        </div>
      ))}
      {hasError && <span> Has error: {hasError}</span>}
    </div>
  );
};

export default Articles;











