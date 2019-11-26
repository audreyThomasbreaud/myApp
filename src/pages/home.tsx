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
          },
      },

          titre: {
            // color: '#f48fb1',
            // fontSize:86,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'flex-start',
            // marginTop: theme.spacing(15),
            // marginLeft: theme.spacing(10),
          }
  }));

export default function Home() {
    const classes = useStyles();

  return (
    <Container maxWidth="xl">
        <h1 className={classes.titre}>BIENVENUE</h1>
        <SimpleFade/>
    </Container>
);
}