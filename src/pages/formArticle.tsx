import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princessee from '../pics/Princessee.png';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';



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
        color:'#f8bbd0',
        fontSize:72,
    },
    button: {
        marginBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color:'#d81b60',
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(8),
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
})
);

export default function FormArticle() {
  const classes = useStyles();
return (
    <Container component="main" maxWidth="xl">
        <h1 className={classes.titre}>CREER UN ARTICLE : </h1>

        <div className={classes.blur}>
        </div>
        <div>
        <form className={classes.form} noValidate autoComplete ="off">
           <div className={classes.formu}>

                <TextField
                    id="outlined-required"
                    label="titre de l'article :"
                   
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-required"
                    label="auteur de l'article:"
                    
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                />
                 <TextField
                     id="outlined-multiline-static"
                     label="Votre article: "
                     multiline
                     rows="4"
                   
                     className={classes.textField}
                     margin="normal"
                     variant="outlined"
                     color="secondary"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button}>
                    telecharger votre image
                    </Button>
                </label>
                <Button variant="contained" href="#contained-buttons" className={classes.button}>
                    Envoyer
                </Button>
            </div>
        </form>
        </div>
    </Container>
) ;
}