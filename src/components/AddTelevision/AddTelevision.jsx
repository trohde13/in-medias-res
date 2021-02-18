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

function AddTelevision({openTelevision, setOpenTelevision}) {
  console.log('in AddTelevision form');

  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

//Close Dialog
const handleClose = () => {
    setOpenTelevision(false);
  };

  const [newTelevision, setNewTelevision] = React.useState({
    media_type_id: 3,
    title: '',
    season: '',
    episode: '',
    thoughts: '',
    status: '',
    date: '',
  });

  //function to update state from input fields
  const handleChange = (key, event) => {
    console.log('in handleChange in AddTelevisont');
    switch (key) {
      case 'media_type_id':
        setNewTelevision({
          ...newTelevision,
          media_type_id: event.target.value,
        });
        break;
      case 'title':
        setNewTelevision({
          ...newTelevision,
          title: event.target.value,
        });
        break;
      case 'season':
        setNewTelevision({
          ...newTelevision,
          season: event.target.value,
        });
        break;
      case 'episode':
        setNewTelevision({
          ...newTelevision,
          episode: event.target.value,
        });
        break;
      case 'thoughts':
        setNewTelevision({
          ...newTelevision,
          thoughts: event.target.value,
        });
        break;
      case 'status':
        setNewTelevision({
          ...newTelevision,
          status: event.target.value,
        });
        break;
      case 'date':
        setNewTelevision({ ...newTelevision, date: event.target.value });
        break;
    }
  }; //end handleChange

  //onClick function to submit television
  const handleSubmit = (event) => {
    console.log('clicked handleSubmit');

    //dispatch here:
    dispatch({
      type: 'ADD_TELEVISION',
      payload: newTelevision,
    });

    //adding new media item
    setNewTelevision({
      media_type_id: '',
      title: '',
      season: '',
      episode: '',
      thoughts: '',
      status: '',
      date: '',
    });

    history.push('/user');
  }; //end handleSubmit

  //onClick function to cancel adding media and return to journal page
  const sendHome = () => {
    history.push('/user');
  }; //end sendHome

  return (
    <div>
      <Dialog
        open={openTelevision}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* select date for entry */}
            <div>
              <TextField
                id="television-date"
                label="date ..."
                style={{ width: 250, margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                value={newTelevision.date}
                onChange={(event) => handleChange('date', event)}
                variant="outlined"
              />
            </div>

            {/* input fields for title, season, episode, thoughts */}
            <div>
              <TextField
                id="television-title"
                label="title ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
                value={newTelevision.title}
                onChange={(event) => handleChange('title', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="television-season"
                label="season ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter season number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newTelevision.season}
                onChange={(event) => handleChange('season', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="television-episode"
                label="episode ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter episode number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newTelevision.episode}
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
                value={newTelevision.thoughts}
                onChange={(event) => handleChange('thoughts', event)}
                variant="outlined"
              />
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="status-input">status ...</InputLabel>
                <Select
                  labelId="status-input"
                  id="television-status"
                  value={newTelevision.status}
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

        {/* buttons for cancel, add new media, submit */}
        <DialogActions>
          <div>
            <Button variant="outlined" onClick={sendHome}>
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
} //end AddTelevision


export default AddTelevision;