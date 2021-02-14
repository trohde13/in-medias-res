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

  const media = useSelector((store) => store.media);

  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA' });
  }, []);

  const mediaToDisplay = media.map((entry) => {
    if ( dateArrayIds.indexOf(entry.id) > -1 ) {
      return entry;
    }
  }); //end mediaToDisplay

  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_MEDIA', payload: media.id })
  };

  return (
    // second map for date -- media entries , here id matches that day
    {mediaToDisplay.map}((media) => { 
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
            
            {(() => {
              if ({media.media_type_id} = 1) {
                return <Typography
                          variant="subtitle2"
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Books ...
                        </Typography>
                        <Typography variant="body1">
                          {media.title} by {media.author}
                        </Typography>
              } else if ({media.media_type_id} = 2) {
                  return <Typography
                            variant="subtitle2"
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            Movies ...
                          </Typography>
                          <Typography variant="body1">
                            {media.title}, {media.year}
                          </Typography>
              } else if ({media.media_type_id} = 3) {
                  return <Typography
                            variant="subtitle2"
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            Television ...
                          </Typography>
                          <Typography variant="body1">
                            {media.title} -- {media.season_television}.
                            {media.episode}
                          </Typography>
              } else if ({media.media_type_id} = 4) {
                  return <Typography
                            variant="subtitle2"
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            Podcasts ...
                          </Typography>
                          <Typography variant="body1">
                            {media.title} -- {media.season}.
                            {media.episode}
                          </Typography>
              }
            })}

            <Typography variant="body2">
              Thoughts: {media.thoughts}
            </Typography>
            <Typography variant="body2">{media.status}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleDelete}>Delete</Button>
          </CardActions>
          </Paper>
        </Box>
        
      </Card>
      );
    })
  );
} //end JournalItem

export default JournalItem;
