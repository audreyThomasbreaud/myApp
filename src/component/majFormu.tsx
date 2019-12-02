import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button } from "@material-ui/core";
import Princessee from "../pics/Princessee.png";
import { useParams } from "react-router";
import Article from "../interface/Article.interface";
// import MajArticles from "../component/majArticle";

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
    textField: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(8),
        width:1000,
        backgroundColor:'#f48fb1',
    },
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
        top:"-545px",
        overflow:"hidden",
        marginLeft:"65%"
    },
    pic:{
      height:"120px"
    }
  })
  );

const MajFormu = () => {
    const [hasError, setErrors] = useState(false);
    const [articles, setArticles] = useState<Article>();
    const classes = useStyles();
  
    let { id } = useParams();
  
  async function UpDateData() {
    return fetch("http://127.0.0.1:3000/articles/"+`${id}`,
      {
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          
        }),
        cache: "default"
      })
  }
  // useEffect(() => {
  //   UpDateData()
  //     .then(res => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setArticles(res);
  //     });
  // }, []);

  return(
    <h1 className={classes.titre}> VOTRE ARTICLE EST MIS A JOUR </h1>
  )
};

export default MajFormu;