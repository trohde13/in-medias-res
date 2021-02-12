import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  TextField,
  makeStyles,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Checkbox,
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
  Select,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from 'react-date-picker';
import { useHistory } from 'react-router-dom';


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

function AddMovie({openMovie, setOpenMovie}) {
    console.log('in AddMovie form')

    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();
  
  
  const [newMovie, setNewMovie] = React.useState({
    media_type_id: 2,
    title_movie: '',
    year: '',
    thoughts_movie: '',
    status_movie: '',
    date: '',
  });

  //function to update state from input fields
  const handleChange = (key, event) => {
    console.log('in handleChange in AddMovie');
    switch (key) {
      case 'media_type_id':
        setNewMovie({ ...newMovie, media_type_id: event.target.value });
        break;
      case 'title_movie':
        setNewMovie({ ...newMovie, title_movie: event.target.value });
        break;
      case 'year':
        setNewMovie({ ...newMovie, year: event.target.value });
        break;
      case 'thoughts_movie':
        setNewMovie({ ...newMovie, thoughts_movie: event.target.value });
        break;
      case 'status_movie':
        setNewMovie({ ...newMovie, status_movie: event.target.value });
        break;
      case 'date':
        setNewMovie({ ...newMovie, date: event.target.value });
        break;
    }
  }; //end handleChange

  //onClick function to submit books
  const handleSubmit = (event) => {
    console.log('clicked handleSubmit');

    //dispatch here:
    dispatch({
      type: 'ADD_MEDIA',
      payload: newMovie,
    });

    //adding new media item
    setNewMovie({
      media_type_id: '',
      title_movie: '',
      year: '',
      thoughts_movie: '',
      status_movie: '',
      date: '',
    });

    history.push('/journal');
  }; //end handleSubmit

  //onClick function to cancel adding media and return to journal page
  const sendJournal = () => {
    history.push('/journal');
  }; //end sendHome

  return (
    <div>
      <Dialog
        open={openMovie}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* select date for entry */}
            <div>
              <TextField
                id="outlined-full-width"
                label="date ..."
                style={{ width: 250, margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                value={newMovie.date}
                onChange={(event) => handleChange('date', event)}
                variant="outlined"
              />
            </div>

            {/* input fields for title, year, thoughts */}
            <div>
              <TextField
                id="outlined-full-width"
                label="title ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
                value={newMovie.title}
                onChange={(event) => handleChange('title', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-full-width"
                label="year ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter year released"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newMovie.year}
                onChange={(event) => handleChange('year', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="thoughts ..."
                multiline
                rows={4}
                style={{ width: 250, margin: 8 }}
                value={newMovie.thoughts}
                onChange={(event) => handleChange('thoughts', event)}
                variant="outlined"
              />
            </div>

            {/* Status of Media Dropdown */}
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="status-input">status ...</InputLabel>
                <Select
                  labelId="status-input"
                  id="simple-select-outlined"
                  value={newMovie.status}
                  onChange={(event) => handleChange('status', event)}
                  label="status"
                  style={{ width: 250, margin: 8 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Current'}>Current</MenuItem>
                  <MenuItem value={'Finished'}>Finished</MenuItem>
                  <MenuItem value={'Abandoned'}>Abandoned</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContentText>
        </DialogContent>

        {/* buttons for cancel, add new media, submit */}
        <DialogActions>
          <div>
            <Button variant="outlined" onClick={sendJournal}>
              Cancel
            </Button>
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
} //end AddMovie


export default AddMovie;