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

function AddPodcast({openPodcast, setOpenPodcast}) {
  console.log('in AddPodcast form');

  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  //Close Dialog
  const handleClose = () => {
    setOpenTelevision(false);
  };

  const [newPodcast, setNewPodcast] = React.useState({
    media_type_id: 4,
    title: '',
    season: '',
    episode: '',
    thoughts: '',
    status: '',
    date: '',
  });

  //function to update state from input fields
  const handleChange = (key, event) => {
    console.log('in handleChange in AddPodcast');
    switch (key) {
      case 'media_type_id':
        setNewPodcast({ ...newPodcast, media_type_id: event.target.value });
        break;
      case 'title':
        setNewPodcast({ ...newPodcast, title: event.target.value });
        break;
      case 'season':
        setNewPodcast({ ...newPodcast, season: event.target.value });
        break;
      case 'episode':
        setNewPodcast({ ...newPodcast, episode: event.target.value });
        break;
      case 'thoughts':
        setNewPodcast({ ...newPodcast, thoughts: event.target.value });
        break;
      case 'status':
        setNewPodcast({ ...newPodcast, status: event.target.value });
        break;
      case 'date':
        setNewPodcast({ ...newPodcast, date: event.target.value });
        break;
    }
  }; //end handleChange

  //onClick function to submit podcast
  const handleSubmit = (event) => {
    console.log('clicked handleSubmit');

    

    //dispatch here:
    dispatch({
      type: 'ADD_PODCAST',
      payload: newPodcast,
    });

    //adding new media item
    setNewPodcast({
      media_type_id: '',
      title: '',
      season: '',
      episode: '',
      thoughts: '',
      status: '',
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
        open={openPodcast}
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
                value={newPodcast.date}
                onChange={(event) => handleChange('date', event)}
                variant="outlined"
              />
            </div>

            {/* input fields for title, season, episode, thoughts */}
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
                value={newPodcast.title}
                onChange={(event) => handleChange('title', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-full-width"
                label="season ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter season number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newPodcast.season}
                onChange={(event) => handleChange('season', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-full-width"
                label="episode ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter episode number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newPodcast.episode}
                onChange={(event) => handleChange('episode', event)}
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
                value={newPodcast.thoughts}
                onChange={(event) => handleChange('thoughts', event)}
                variant="outlined"
              />
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="status-input">status ...</InputLabel>
                <Select
                  labelId="status-input"
                  id="simple-select-outlined"
                  value={newPodcast.status}
                  onChange={(event) => handleChange('status', event)}
                  label="status"
                  defaultValue="Current"
                  style={{ width: 250, margin: 8 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'current'}>Current</MenuItem>
                  <MenuItem value={'finished'}>Finished</MenuItem>
                  <MenuItem value={'abandoned'}>Abandoned</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContentText>
        </DialogContent>

        {/* buttons for cancel, submit */}
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
} //end AddPodcast



export default AddPodcast;