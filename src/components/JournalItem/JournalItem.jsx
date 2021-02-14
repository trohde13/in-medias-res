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
  Paper,
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

function JournalItem({ dateArrayIds }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const media = useSelector((store) => store.media);

  useEffect(() => {
    dispatch({ type: 'FETCH_MEDIA' });
  }, []);

  const mediaToDisplay = media.filter(
    (entry) => dateArrayIds.indexOf(entry.id) > -1
  ); //end mediaToDisplay

  //function to delete an item
  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_MEDIA', payload: media.id });
  };

  

  return (
    <Card variant="outlined" elevation={4}>
      {mediaToDisplay.map((media) => {
        return (
          <Box
            paddingTop={2}
            paddingLeft={2}
            paddingRight={2}
            paddingBottom={2}
          >
            <Paper elevation={4}>
              <CardContent>
                {media.media_type_id === 1 ? (
                  <>
                    <Typography
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
                  </>
                ) : media.media_type_id === 2 ? (
                  <>
                    <Typography
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
                  </>
                ) : media.media_type_id === 3 ? (
                  <>
                    <Typography
                      variant="subtitle2"
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Television ...
                    </Typography>
                    <Typography variant="body1">
                      {media.title} -- {media.season_television}.{media.episode}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="subtitle2"
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Podcasts ...
                    </Typography>
                    <Typography variant="body1">
                      {media.title} -- {media.season}.{media.episode}
                    </Typography>
                  </>
                )}

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
        );
      })}
    </Card>
  );
} //end JournalItem

export default JournalItem;
