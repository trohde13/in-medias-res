import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
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

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const classes = useStyles();

  return (
    <>
    
    
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Welcome to in media res</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div>
              <Typography variant="subtitle2">Welcome, {user.username}!</Typography>
              <Typography variant="p">Your ID is: {user.id}</Typography>
              <LogOutButton className="btn" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Welcome to in media res</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <div>
              <Button>ADD ENTRY</Button>
            </div>
            <div>
              <Button>YOUR JOURNAL</Button>
            </div>
            {/* <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="status-input">status ...</InputLabel>
                <Select
                  labelId="status-input"
                  id="book-status"
                  value={newBook.status}
                  onChange={(event) => handleChange('status', event)}
                  label="status"
                  defaultValue="Current"
                  style={{ width: 250, margin: 8 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Current'}>Books</MenuItem>
                  <MenuItem value={'Finished'}>Movies</MenuItem>
                  <MenuItem value={'Abandoned'}>Abandoned</MenuItem>
                </Select>
              </FormControl>
            </div> */}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="body1">"Inspiring Quote Here"</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>

      </Grid>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
