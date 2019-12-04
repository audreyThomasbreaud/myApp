import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Princessee from '../pics/Princessee.png';
import { useParams } from 'react-router';
import { Container, Button } from '@material-ui/core';
import Article from '../interface/Article.interface';




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
    
    titre: {
        display: 'flex',
        position: "relative",
        marginBottom: theme.spacing(8),
        marginTop: theme.spacing(15),
        color:'#d81b60',
        fontSize:72,
    },
    
    buttonun: {
        marginBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color:'#f48fb1',
        backgroundColor:'#d81b60'
    },
    inputimg: {
       display: 'none', 
    },
    input:{
      backgroundColor:'#d81b60'
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
        overflow:"hidden",
        marginLeft:"65%"
    },
    textarea:{
      row:'25px',
      cols:'45px'
    },
    pic:{
      height:"0px"
    },
    label:{
    fontSize:20,
    }
  })
  );

const FormArticle = () => {
    // const [hasError, setErrors] = useState(false);
    const classes = useStyles();

    const paramUrl: any = useParams();
    const [articles, setArticles] = useState<Article>({
        id:'',
        title: '',
        content:'',
        auteur:'',
        pic:''
      });


    async function Submit() {
        return fetch("http://127.0.0.1:3000/articles/",
          {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(articles),
          })
        }

      return (
        <Container component="main" maxWidth="xl">
            <h1 className={classes.titre}>CREER VOTRE ARTICLE : </h1>
            <div>
                <form className={classes.form} noValidate autoComplete ="off" method="PATCH">
                  <div className={classes.formu}>

                    <div>
                    <label className={classes.label} htmlFor="">Identifiant : </label>
                    <input className={classes.input} type="text" id="id" name="id" readOnly/>
                    </div>

                    <div>
                    <label className={classes.label} htmlFor="">titre de l'article : </label>
                    <input className={classes.input} type="text" id="title" name="title" placeholder="titre de l'article"
                      onChange={
                        (event) => {
                          articles.title =(event.currentTarget.value)
                          setArticles({...articles});
                        }
                      }
                    />
                    </div>

                    <div>
                    <label className={classes.label} htmlFor="">votre article : </label>
                    <textarea className={classes.textarea} id="content" name="content" placeholder="contenu de l'article" value={articles.content}
                    onChange={
                      (event) => {
                        articles.content =(event.currentTarget.value)
                        setArticles({...articles});
                      }
                            }
                    ></textarea>
                    {/* <input className={classes.input} type="text" id="content" name="content" placeholder="contenu de l'article" value={articles.content}
                    onChange={
                      (event) => {
                        articles.content =(event.currentTarget.value)
                        setArticles({...articles});
                      }
                            }
                    /> */}
                    </div>
                    <div>
                    <label className={classes.label} htmlFor="">auteur de l'article : </label>
                    <input className={classes.input} type="text" id="auteur" name="auteur" placeholder="auteur de l'article" value={articles.auteur}
                    onChange={
                      (event) => {
                        articles.auteur =(event.currentTarget.value)
                        setArticles({...articles});
                      }
                            }
                    />
                    </div>
    
                    <div>
                    <label className={classes.label} htmlFor="">votre image : </label>
                    <img className={classes.pic} src= {`${articles.pic}`} alt=" "/>
                    <input
                          accept="image/*"
                          className={classes.inputimg}
                          id="contained-button-file"
                          multiple
                          type="file"
                    />
                    </div>
    
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span" className={classes.buttonun}>
                         Télecharger votre image
                        </Button>
                    </label>
                        <Button className={classes.buttonun} onClick={() => {Submit()}}>
                         Envoyer
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
      );
    
    }

export default FormArticle;