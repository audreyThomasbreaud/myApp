import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Princessee from '../pics/Princessee.png';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundImage: `url(${Princessee})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
       },
    },
}));

export default function FrontUser() {
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xl">



      </Container>
);
}