import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princess from '../pics/Princess.jpg';
import SimpleFade from'../component/titre';

const useStyles = makeStyles(theme => ({
      '@global': {
          body: {
            backgroundImage: `url(${Princess})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            width:'100%',
            height:'100%'
          },
      },

          titreHome: {
          }
  }));

export default function Home() {
    const classes = useStyles();

  return (
    <Container maxWidth="xl">
        <h1 className={classes.titreHome}>BIENVENUE</h1>
        <SimpleFade/>
    </Container>
);
}