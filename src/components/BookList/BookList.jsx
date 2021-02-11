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
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));



function BookList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const media = useSelector(store => store.media);
    const classes = useStyles();

    //getting the book info on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA'})
    }, []);

    const handleReturn = () => {
        history.push('/dashboard')
    }

    const handleJournal = () => {
        history.push('/journal')
    }



    return(

        <main>
            <h1>Books Read:</h1>

            <div className={classes.root} >

                <Paper 
                    elevation={4}
                    style= {{ width: 400, margin: 8 }}
                    align="center"
                    item key={media.id}
                    >
                    <ul>
                        {media.map(media => {
                            return (
                                <li>{media.title_book} by {media.author} </li>
                            )
                        })}
                    </ul>
                    <div>
                        <Button onClick={handleReturn}>Dashboard</Button>
                    </div>
                    <div>
                        <Button onClick={handleJournal}>Journal</Button>
                    </div>
                </Paper>
                
            </div>
        </main>

    )
}; //end BookList

export default BookList;