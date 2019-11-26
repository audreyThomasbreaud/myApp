import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    p:{
        color: '#f48fb1',
            fontSize:86,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
    },
    p2:{
        color: '#d81b60',
            fontSize:86,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'flex-end',
    },
    p3:{
        width:'25px'
    }
   
  }),
);

export default function SimpleFade() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
        <div className={classes.container}>
            <Zoom in={checked}>
                <p className={classes.p}>BIEN</p> 
            </Zoom>
            <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                <p className={classes.p}>VENUE </p>
            </Zoom>
            <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                <p className={classes.p3}> </p>
            </Zoom>
            <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                <p className={classes.p2}>SUR CE BLOG</p>
            </Zoom>
            {/* <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
               <p>lalal<img src="../pics/coeur.jpg" alt=""/></p>
            </Zoom> */}
        </div>
    </div>
  );
}