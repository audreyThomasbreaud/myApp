import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      position: "absolute",
      width: "100%",
      height: "100%"
   },
  },
  pic: {
    height:'15em',
   alignItems:'center',
    width:'15em'
  },
  title:{
    color: '#d81b60',
  },
parent:{
  // display: 'flex',
  // width:'100%',
  // marginBottom:'2%',
  // alignItems:'center',
  // alignContent:'center'
},
id:{
display:'none',
},
article:{
  // width:'50em',
  // color:'black',
  // alignItems:'center'
}, 
root:{

},
titre: {
  marginTop: theme.spacing(15),
  color:'#d81b60',
  fontSize:72,
  textAlign:'center'
},
auteur:{
  color: '#d81b60'
}
}));


const ArticlesUser = () => {
  const [hasError
  ] = useState(false);
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
          <div className={classes.root}>
            <Grid container spacing={2}>
            
              <Grid item xs={12}>
              <div className={classes.id}>{article.id} </div>
              </Grid>
              <Grid item xs={4} 
              container 
              direction="row"
              justify="center"
              alignItems="center">
              <img className={classes.pic} src={article.pic} alt=" "></img>
              </Grid>
              <Grid item xs={6}
              container 
              direction="row"
              justify="center"
              alignItems="center">
              <h1 className={classes.title}>{article.title}</h1>
              <p className={classes.article}>{article.content}</p>
              <p className={classes.auteur}>{article.auteur}</p>
              </Grid>
            </Grid>
          </div>
        </div>
      ))}
      {hasError && <span> Has error: {hasError}</span>}
    </div>
  );
};

export default ArticlesUser;











