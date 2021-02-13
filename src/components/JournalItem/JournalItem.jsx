import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Button,
  Typography,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function JournalItem({ media }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_MEDIA', payload: media.id })
  };

  return (

    <Card variant="outlined" elevation={4}>
      <Box 
        paddingTop={2}
        paddingLeft={2} 
        paddingRight={2}
        paddingBottom={2}
      >
        <Paper elevation={4}>
        <CardContent>
          <Typography
            variant="subtitle2"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Books ...
          </Typography>
          <Typography variant="body1">
            {media.title_book} by {media.author}
          </Typography>
          <Typography variant="body2">
            Thoughts: {media.thoughts_book}
          </Typography>
          <Typography variant="body2">{media.status_book}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Paper>
      </Box>
      <Box 
        paddingTop={2}
        paddingLeft={2} 
        paddingRight={2}
        paddingBottom={2}
      >
        <Paper elevation={4}>
        <CardContent>
          <Typography
            variant="subtitle2"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Movies ...
          </Typography>
          <Typography variant="body1">
            {media.title_movie}, {media.year}
          </Typography>
          <Typography variant="body2">
            Thoughts: {media.thoughts_movie}
          </Typography>
          <Typography variant="body2">Status: {media.status_movie}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Paper>
      </Box>
      <Box 
        paddingTop={2}
        paddingLeft={2} 
        paddingRight={2}
        paddingBottom={2}
      >
        <Paper elevation={4}>
        <CardContent>
          <Typography
            variant="subtitle2"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Television ...
          </Typography>
          <Typography variant="body1">
            {media.title_television} -- {media.season_television}.
            {media.episode_television}
          </Typography>
          <Typography variant="body2">
            Thoughts: {media.thoughts_television}
          </Typography>
          <Typography variant="body2">
            Status: {media.status_television}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Paper>
      </Box>
      <Box 
        paddingTop={2}
        paddingLeft={2} 
        paddingRight={2}
        paddingBottom={2}
      >
        <Paper elevation={4}>
        <CardContent>
          <Typography
            variant="subtitle2"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Podcasts ...
          </Typography>
          <Typography variant="body1">
            {media.title_podcast} -- {media.season_podcast}.
            {media.episode_podcast}
          </Typography>
          <Typography variant="body2">
            Thoughts: {media.thoughts_podcast}
          </Typography>
          <Typography variant="body2">
            Status: {media.status_podcast}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Paper>
      </Box>
    </Card>
  );
} //end JournalItem

export default JournalItem;
