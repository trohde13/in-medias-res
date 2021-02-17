import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper, 
  Grid, 
  Button, 
  Typography, 
  FormControl, 
  TextField,
  InputLabel,
  MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to in medias res');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <Typography variant="h2">{heading}</Typography>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <Typography variant="body1">
            in medias res is a personal journal for the media that you love. 
          </Typography>

          <Typography variant="body1">
            So much focus in the world is on social media, consuming only to share.
            in media res is focused on taking those things that we love and allowing us
            a private space to collect what we are reading, watching, and listening to 
            with room to reflect.
          </Typography>

          
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
