import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
pic: {
  height:'15em',
  marginRight:'1em',
  width:'15em'
},

parent:{
  display: 'flex',
  alignItems:'center',
  alignContent:'center'
},

artitre:{
  width:'50em',
  color:'#d81b60',
  alignItems:'center'
},

container:{
  alignItems:'center',

},

article:{
  width:'50em',
  color:'#212121',
  alignItems:'center'
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
    <Container component="main" maxWidth="xl" className={classes.container}>
    <div>
      {articles &&
      articles.map((article: any) => (
        <div className={classes.parent} key={article.id}>
          <img className={classes.pic} src={article.pic} alt="pic"></img>
            <div>
            <h1 className={classes.artitre}>{article.title}</h1>
            <p className={classes.article}>{article.content}</p>
            <p>{article.auteur}</p>
            </div>
        </div>
      ))}
      {hasError && <span> Has error: {hasError}</span>}
    </div>
    </Container>
  );
};

export default ArticlesUser;











