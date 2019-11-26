import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princessee from '../pics/Princessee.png';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
// import {Articles} from '../component/list';
// import usePostArticleService from '../component/list';
// import { Service } from '../interface/state.interface';
import Articles from '../component/list';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundImage: `url(${Princessee})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        },
      },

        titre: {
          color:'#f8bbd0',
          fontSize:62,
          display: 'flex',
          flexDirection: 'column',
          marginTop: theme.spacing(15),
      },

      button: {
        color: '#f48fb1',
        backgroundColor: '#d81b60',
        marginRight:8,
      },

      buttonun: {
        color: '#d81b60',
        backgroundColor: '#f48fb1',
        marginRight:8,
      }
}));


export default function AfficherListe() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <h1 className={classes.titre}>LISTE DES ARTICLES :</h1>
      <div><Articles/></div>
      <div>
        <Button
          color="secondary"
          className={classes.buttonun}
          startIcon={<UpdateIcon />}> Mettre à jour
        </Button>

        <Button
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}> Supprimer
        </Button>
      </div>
    </Container>
);}

// const Articles: React.FC<{}> = () => {
//   const service = usePostArticleService();
 

//   return (

//     <div>
//       test
//     </div>
//     // <div>
//     //   {service.status === 'loading' && <div>Loading...</div>}
//     //   {service.status === 'error' && (
//     //     <div>Error, the backend moved to the dark side.</div>
//     //   )}
//     // </div>
//   );
// };
// 
// export default Articles;

