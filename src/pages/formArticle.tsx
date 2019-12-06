import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Princessee from '../pics/Princessee.png';
import { useParams } from 'react-router';
import { Button, Grid, Modal } from '@material-ui/core';
import Article from '../interface/Article.interface';




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
  buttonun: {
      marginBottom: theme.spacing(5),
      marginTop:theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#f48fb1',
      backgroundColor:'#d81b60',
      width:'100%',
  },
  inputimg: {
     display: 'none', 
  },
  input:{
    backgroundColor:"#f48fb1",
    width:'100%',
  height:'2em'
  },
  textarea:{
    width: "100%",
    height: "20em",
    backgroundColor:"#f48fb1", 
  },
  pic:{
   display:'none',
  },
  label:{
  fontSize:30,
  width:'100%',
  color:'#d81b60',
  },
  root:{
    flexGrow:1,
    textAlign:'center',
    marginLeft:'20%',
    marginRight:'20%'
  },
  modal:{
    position: 'absolute',
    width: 400,
    backgroundImage: `url(${Princessee})`,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
})
);

const FormArticle = () => {
    const classes = useStyles();
    const paramUrl: any = useParams();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [articles, setArticles] = useState<Article>({
        id:'',
        title: '',
        content:'',
        auteur:'',
        pic:''
      });
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
     
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

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
          .then((res:any)=>{
            handleOpen();
        })
        }

      return (
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className={classes.titre}>CREER VOTRE ARTICLE </h1>
            <div>
            <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.modal}>
            <h2 id="simple-modal-title"> Votre article a bien été créé </h2>
            <Button href="/AfficherListe">aller à la liste</Button>

          </div>
        </Modal>
                <form noValidate autoComplete ="off" method="PATCH">
                    {/* <div>
                    <Grid item xs={12}> 
                    <label className={classes.label} htmlFor="">Identifiant : </label>
                    <input className={classes.input} type="text" id="id" name="id" readOnly/>
                    </Grid>
                    </div> */}

                      <Grid item xs={12}> 
                      <label className={classes.label} htmlFor="">titre de l'article : </label>
                      <input className={classes.input} type="text" id="title" name="title" placeholder="titre de l'article"
                        onChange={
                          (event) => {
                           articles.title =(event.currentTarget.value)
                            setArticles({...articles});
                          }
                        }
                      />
                      </Grid>
                      <Grid item xs={12}> 
                      <label className={classes.label} htmlFor="">votre article : </label>
                      <textarea className={classes.textarea} id="content" name="content" placeholder="contenu de l'article" value={articles.content}
                      onChange={
                        (event) => {
                          articles.content =(event.currentTarget.value)
                          setArticles({...articles});
                        }
                       }
                      >
                      </textarea>
                      </Grid>
                      <Grid item xs={12}> 
                      <label className={classes.label} htmlFor="">auteur de l'article :  </label>
                      <input className={classes.input} type="text" id="auteur" name="auteur" placeholder="auteur de l'article" value={articles.auteur}
                        onChange={
                          (event) => {
                          articles.auteur =(event.currentTarget.value)
                          setArticles({...articles});
                          }
                        }
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <img className={classes.pic} src= {`${articles.pic}`} alt=" "/>
                      <input
                          accept="image/*"
                          className={classes.inputimg}
                          id="contained-button-file"
                          multiple
                          type="file"
                      />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="secondary" component="span" className={classes.buttonun}>
                         Télecharger votre image
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button className={classes.buttonun} onClick={() => {Submit()}}>
                         Envoyer
                        </Button>
                      </Grid>
                </form>
            </div>
          </Grid>
        </Grid>
        </div>
      );
}

export default FormArticle;