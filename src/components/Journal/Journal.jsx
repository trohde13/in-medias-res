import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



function Journal() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  //useSelector to get media from reducer
  const dateArrayIds = useSelector((store) => store.date);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATE' });
    dispatch({ type: 'FETCH_MEDIA' });
  }, []);

  return (
    <main>
      <Grid container>
      <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={4}
            align="center"
          >
          <Typography variant="h4">Welcome to your Journal</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item align="center" xs={12} sm={6}>
            <Paper>
              <Button 
              variant="outlined"
              color="primary"
              onClick={() => history.push('/add')}
              >
                ADD ENTRY
              </Button>
            </Paper>
            </Grid>
            <Grid item xs={6} sm={3}></Grid>
            <Grid item xs={6} sm={3}></Grid>
          <Grid item
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
            xs={12} sm={6}>  
          {/* first map for date ids */}
          {dateArrayIds.map((media, i) => {
            return (
              <Grid item key={i}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="subtitle1" className={classes.heading}>
                      {moment(media.date).format("MMMM Do YYYY")}{""}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <JournalItem dateArrayIds={media.dateIDs} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
      </Grid>
    </main>
  );
} //end journal

export default Journal;
