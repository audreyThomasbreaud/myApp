import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
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

        paper: {
          marginTop: theme.spacing(40),
          marginLeft: theme.spacing(14),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },

        avatar: {
          margin: theme.spacing(1),
          marginLeft:theme.spacing(25),
          backgroundColor: theme.palette.secondary.main,
        },

        form: {
          width: '40%', // Fix IE 11 issue.
          marginTop: theme.spacing(2),
          marginLeft:theme.spacing(35)
        },

        submit: {
          margin: theme.spacing(3, 0, 2),
        },

        connect: {
          width: '50%',
          marginLeft:theme.spacing(110), 
        },

        input: {
          backgroundColor:'f48fb1',
        },

        remember: {
          color: '#F50057',
          textAlign: 'center' 
        }
  }));

export default function SignIn() {
    const classes = useStyles();

    return(
      <Grid container spacing={2}>
      <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}> <LockOutlinedIcon /></Avatar>

          <Typography className={classes.connect}  variant="h5" color="secondary">Se connecter</Typography>

          <form className={classes.form} noValidate>

              <TextField className={classes.input}
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
                color="secondary"
                autoFocus
              />
              <TextField className={classes.input}
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
              />
              <FormControlLabel className={classes.remember}
                control={<Checkbox value="remember"/>}
                label="Se souvenir de moi "
                color="secondary"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                >Sign In 
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="secondary">Mot de passe oublié</Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" color="secondary">{"Créer un compte"}</Link>
                </Grid>
              </Grid>
          </form>
        </div>
      </Grid>
    );
}