import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
}));

function ListTelevision() {
  const history = useHistory();
  const dispatch = useDispatch();
  const media = useSelector((store) => store.television);
  const classes = useStyles();

  //getting the book info on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_TV' });
  }, []);

  const handleReturn = () => {
    history.push('/user');
  };

  const handleJournal = () => {
    history.push('/journal');
  };
  console.log('log of media in journal', media);
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Paper align="center" elevation={4} className={classes.paper}>
              <Typography variant="h4">Television Shows I've Watched To:</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}></Grid>

          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Paper align="center" elevation={4} className={classes.paper}>
              <ButtonGroup variant="text">
                <Button onClick={handleReturn}>Dashboard</Button>
                <Button onClick={handleJournal}>Journal</Button>
              </ButtonGroup>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={4} align="center" key={media.id}>
              {media.map((television) => {
                return (
                  <Typography variant="body2">
                    {television.title} -- {television.season} . {television.episode}{' '}
                  </Typography>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}></Grid>
        </Grid>
      </div>
    </>
  );
} //end ListTelevision

export default ListTelevision;