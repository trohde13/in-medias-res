import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
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
  const media = useSelector((store) => store.media);
  const classes = useStyles();

  //getting the book info on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA' });
  }, []);

  const handleReturn = () => {
    history.push('/dashboard');
  };

  const handleJournal = () => {
    history.push('/journal');
  };
  console.log('log of media in journal', media);
  return (
    <main>
      <h1>Books Read:</h1>

      <div className={classes.root}>
        <Paper
          elevation={4}
          style={{ width: 700, margin: 8, padding: 4 }}
          align="center"
          key={media.id}
        >
          {media.map((television) => {
            return (
              <Typography variant="body2">
                {television.title} -- {television.season} . {television.episode} {' '}
              </Typography>
            );
          })}

          <div>
            <Button onClick={handleReturn}>Dashboard</Button>
          </div>
          <div>
            <Button onClick={handleJournal}>Journal</Button>
          </div>
        </Paper>
      </div>
    </main>
  );
} //end ListTelevision

export default ListTelevision;