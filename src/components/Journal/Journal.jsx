import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardActions,
  CardContent,
  Box,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import JournalItem from '../JournalItem/JournalItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Journal() {
  const classes = useStyles();

  const dispatch = useDispatch();
  //useSelector to get media from reducer
  const journal = useSelector((store) => store.media);

  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA' });
  }, []);

  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_MEDIA', payload: entry.id })
  };

  return (
    <main>
      <h2>Welcome to your Journal</h2>

      <Grid container spacing={4} justify="center">
      {journal.map((media) => {
        return (
          <Grid item key={media.id}>
              <Typography variant="subtitle1" className={classes.heading}>
                    {media.date}
                  </Typography>
            <JournalItem media={media} />
          </Grid>
        );
      })}
    </Grid>
    </main>
  );
} //end journal

export default Journal;
