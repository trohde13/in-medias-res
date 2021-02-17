import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  TextField,
  makeStyles,
  Typography,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Checkbox,
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
  Select,
  Paper,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from 'react-date-picker';
import { useHistory } from 'react-router-dom';

import AddBook from '../AddBook/AddBook';
import AddMovie from '../AddMovie/AddMovie';
import AddTelevision from '../AddTelevision/AddTelevision';
import AddPodcast from '../AddPodcast/AddPodcast';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

function AddEntry() {
  //Dialog:
  const [openBook, setOpenBook] = React.useState(false);
  const [openMovie, setOpenMovie] = React.useState(false);
  const [openTelevision, setOpenTelevision] = React.useState(false);
  const [openPodcast, setOpenPodcast] = React.useState(false);

  const handleClickOpenBook = () => {
    setOpenBook(true);
  };

  const handleClickOpenMovie = () => {
    setOpenMovie(true);
  };

  const handleClickOpenTelevision = () => {
    setOpenTelevision(true);
  };

  const handleClickOpenPodcast = () => {
    setOpenPodcast(true);
  };

  const handleClose = () => {
    setOpenBook(false);
  };

  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <Paper align="center" elevation={4} className={classes.paper}>
            <Typography variant="h5">Add a New Entry</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid align="center" item xs={12} sm={6}>
          <Paper elevation={4}>
            <div>
              {/* ----Book Button---- */}
              <Button variant="outlined" onClick={handleClickOpenBook}>
                Add Book
              </Button>
              {/* Dialog Form */}
              <AddBook openBook={openBook} setOpenBook={setOpenBook} />

              {/* ----Movie Button---- */}
              <Button variant="outlined" onClick={handleClickOpenMovie}>
                Add Movie
              </Button>
              {/* Dialog form */}
              <AddMovie openMovie={openMovie} setOpenMovie={setOpenMovie} />

              {/* ----Television Button---- */}
              <Button variant="outlined" onClick={handleClickOpenTelevision}>
                Add Television
              </Button>
              {/* Dialog form */}
              <AddTelevision
                openTelevision={openTelevision}
                setOpenTelevision={setOpenTelevision}
              />

              {/* ----Podcast Button---- */}
              <Button variant="outlined" onClick={handleClickOpenPodcast}>
                Add Podcast
              </Button>
              {/* Dialog form */}
              <AddPodcast
                openPodcast={openPodcast}
                setOpenPodcast={setOpenPodcast}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}></Grid>

        {/* select media type */}
      </Grid>
    </div>
  );
} //end AddEntry

export default AddEntry;
