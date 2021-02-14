import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const dateArrayIds = useSelector((store) => store.date);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATE' });
  }, []);


  console.log('dateArrayIds', dateArrayIds)
  return (
    <main>
      <h2>Welcome to your Journal</h2>

      <Grid container spacing={4} justify="center">
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
                    {media.date}
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
    </main>
  );
} //end journal

export default Journal;
