import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '75%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


function Journal () {

    const classes = useStyles();

    const dispatch = useDispatch();
    const media = useSelector(store => store.media);

    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA' });
    }, []);


    return (
        <main>

            <h2>Welcome to your Journal</h2>
            
            <section className="media">
                {media.map(media => {
                    return (
                        <div key={media.id} className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="subtitle1" className={classes.heading}>{media.date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <Typography variant="subtitle2">Books ...</Typography>
                                        <Typography variant="body1">{media.title} by {media.author}</Typography>
                                        <Typography variant="body1">Thoughts: {media.thoughts}</Typography>
                                        <Typography variant="body2">{media.status}</Typography>
                                    </div>
                                    <div>
                                        <Typography variant="subtitle2">Movies ...</Typography>
                                        <Typography variant="body1">{media.title}, {media.year}</Typography>
                                        <Typography variant="body1">Thoughts: {media.thoughts}</Typography>
                                        <Typography variant="body2">{media.status}</Typography>
                                    </div>
                                    <div>
                                        <Typography variant="subtitle2">Television ...</Typography>
                                        <Typography variant="body1">{media.title} {media.season}.{media.episode}</Typography>
                                        <Typography variant="body1">Thoughts: {media.thoughts}</Typography>
                                        <Typography variant="body2">{media.status}</Typography>
                                    </div>
                                    <div>
                                        <Typography variant="subtitle2">Podcasts ...</Typography>
                                        <Typography variant="body1">{media.title} {media.season}.{media.episode}</Typography>
                                        <Typography variant="body1">Thoughts: {media.thoughts}</Typography>
                                        <Typography variant="body2">{media.status}</Typography>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })}
            </section>

        </main>
    )
}; //end journal

export default Journal;