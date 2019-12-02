import React, { useEffect, useState } from 'react';
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
})
);

const FormArticle = () => {
    // const [hasError, setErrors] = useState(false);
    const [setArticles] = useState([]);


async function FormArticle() {
    return fetch (`http://127.0.0.1:3000/articles/id`,
    {
        method: 'POST',
        cache: 'default',
    })
  }

//   useEffect(() => {
//     FormArticle()
// .then(res => res.json())
// .then((res) => {
//    console.log(res)
//   setArticles(res);
//     });
//   }, []);










  const classes = useStyles();
return (
    <p>le</p>
    // <Container component="main" maxWidth="xl">
    //     <h1 className={classes.titre}>CREER UN ARTICLE : </h1>

    //     <div className={classes.blur}>
    //     </div>
    //     <div>
    //     <form className={classes.form} noValidate autoComplete ="off" method="POST" action="">
    //        <div className={classes.formu}>

    //        <TextField
    //                 id="outlined-required"
    //                 label="identifiant :"
    //                 className={classes.textField}
    //                 margin="normal"
    //                 variant="outlined"
    //                 color="secondary"
    //                 InputProps={{
    //                     readOnly: true,
    //                   }}
    //             />

    //             <TextField
    //                 id="outlined-required"
    //                 label="titre de l'article :"
    //                 className={classes.textField}
    //                 margin="normal"
    //                 variant="outlined"
    //                 color="secondary"
    //                 // InputLabelProps={{articles.content}}
    //             />
    //             <TextField
    //                 id="outlined-required"
    //                 label="auteur de l'article:"
    //                 className={classes.textField}
    //                 margin="normal"
    //                 variant="outlined"
    //                 color="secondary"
    //             />
    //              <TextField
    //                  id="outlined-multiline-static"
    //                  label="Votre article: "
    //                  multiline
    //                  rows="4"
    //                  className={classes.textField}
    //                  margin="normal"
    //                  variant="outlined"
    //                  color="secondary"
    //             />
    //             <input
    //                 accept="image/*"
    //                 className={classes.input}
    //                 id="contained-button-file"
    //                 multiple
    //                 type="file"
    //             />
    //             <label htmlFor="contained-button-file">
    //              <Button variant="contained" color="secondary" component="span" className={classes.buttonun}>
    //              Télecharger votre image
    //             </Button>
    //   </label>
    //             <Button type="submit" variant="contained" href="#contained-buttons" className={classes.button}>
    //                 Envoyer
    //             </Button>
    //         </div>
    //     </form>
    //     </div>
    // </Container>
) 
}

export default FormArticle;