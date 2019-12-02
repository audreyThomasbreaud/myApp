import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button } from "@material-ui/core";
import Princessee from "../pics/Princessee.png";
import { useParams } from "react-router";
import Article from "../interface/Article.interface";


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
  form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#d81b60',
  },
  // textField: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     marginBottom: theme.spacing(8),
  //     width:1000,
  //     backgroundColor:'#f48fb1',
  // },
  titre: {
      display: 'flex',
      position: "relative",
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(15),
      color:'#d81b60',
      fontSize:72,
  },
  button: {
      marginBottom: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#d81b60',
  },
  buttonun: {
      marginBottom: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#f48fb1',
      backgroundColor:'#d81b60'
  },
  input: {
      display: 'none',
  },

  blur: {
      height:"550px",
      width:"1100px",
      filter:"blur(20px)",
      backgroundColor:"#f8bbd0",
      position: "relative", 
      marginLeft:"35%",
  },
  formu:{
      position: "relative", 
      // top:"-545px",
      overflow:"hidden",
      marginLeft:"65%"
  },
  pic:{
    height:"120px"
  }
})
);

const MajArticles = () => {
  // const [hasError, setErrors] = useState(false);
  
  const [articles, setArticles] = useState<Article>({
    id:'',
    title: '',
    content:'',
    auteur:'',
    pic:''
  });
  
  const classes = useStyles();

  const paramUrl: any = useParams();
  // const  myHeaders = new Headers();

  async function MajData() {
    return fetch("http://127.0.0.1:3000/articles/"+`${paramUrl.id}`,
      {
        method: "GET",
        // headers: myHeaders,
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

  async function Submit() {
    return fetch("http://127.0.0.1:3000/articles/"+`${paramUrl.id}`,
      {
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(articles),
        // cache: "default"
      })
    }

  return (
    <Container component="main" maxWidth="xl">
        <h1 className={classes.titre}>METTRE A JOUR L ARTICLE : </h1>
        <div>
            <form className={classes.form} noValidate autoComplete ="off" method="PATCH">
              <div className={classes.formu}>

                <input type="text" id="id" name="id" value={articles.id} readOnly/>

                <input type="text" id="title" name="title" value={articles.title} placeholder="titre de l'article"
                  onChange={
                    (event) => {
                      articles.title =(event.currentTarget.value)
                      setArticles({...articles});
                    }
                          }
                />

                <input type="text" id="content" name="content" placeholder="contenu de l'article" value={articles.content}
                onChange={
                  (event) => {
                    articles.content =(event.currentTarget.value)
                    setArticles({...articles});
                  }
                        }
                />

                <img className={classes.pic} src= {`${articles.pic}`} alt=" "/>
                <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                />
    
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="secondary" component="span" className={classes.buttonun}>
                     Télecharger votre image
                    </Button>
                </label>
                    <Button onClick={() => {Submit()}}>
                     Envoyer
                    </Button>
              </div>
            </form>
        </div>
    </Container>
  );
}


export default MajArticles;