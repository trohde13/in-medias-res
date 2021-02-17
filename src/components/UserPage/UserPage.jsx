import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper, 
  Grid, 
  Button, 
  ButtonGroup,
  Typography, 
  FormControl, 
  TextField,
  Select, 
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

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
    
    
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
          elevation={4}
          className={classes.paper}
          >
            <Typography variant="h4">Welcome to in media res</Typography>
            <Typography variant="body1">your personal journal of everything you love to read, watch & listen to</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
          elevation={4} 
          className={classes.paper}>
            <div>
              <ButtonGroup variant="text">
              <Button onClick={() => history.push('/add')}>ADD ENTRY</Button>
            
              <Button onClick={() => history.push('/journal')}>YOUR JOURNAL</Button>
              </ButtonGroup>
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="list-input">lists ...</InputLabel>
                <Select
                  labelId="list-input"
                  id="list-selector"
                  label="media lists"
                  style={{ width: 250, margin: 8 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem onClick={() => history.push('/listbook')}>Books List</MenuItem>
                  <MenuItem onClick={() => history.push('/listmovie')}>Movies List</MenuItem>
                  <MenuItem onClick={() => history.push('/listtelevision')}>Television List</MenuItem>
                  <MenuItem onClick={() => history.push('/listpodcast')}>Podcast List</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
          elevation={4}
          className={classes.paper}>
            <Typography variant="body1">"Books are a uniquely portable magic" ~ Stephen King</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <div>
              <Typography variant="body2">User Name {user.username}</Typography>
              <Typography variant="body2">Your ID is: {user.id}</Typography>
            </div>
        </Grid>

      </Grid>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
