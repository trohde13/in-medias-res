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

function AddBook({openBook, setOpenBook}) {
    console.log('in AddBook form')

    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();
  
  

    const [newBook, setNewBook] = React.useState({
        media_type_id: 1,
        title_book: '',
        author: '',
        thoughts_book: '',
        status_book: '',
        date: ''
    })

     //function to update state from input fields
     const handleChangeBook = (key, event) => {
        console.log('in handleChangeBook')
        switch(key){
            case 'media_type_id':
                setNewBook({...newBook, media_type_id: event.target.value})
                break;
            case 'title_book':
                setNewBook({...newBook, title_book: event.target.value})
                break;
            case 'author':
                setNewBook({...newBook, author: event.target.value})
                break;
            case 'thoughts_book':
                setNewBook({...newBook, thoughts_book: event.target.value})
                break;
            case 'status_book':
                setNewBook({...newBook, status_book: event.target.value})
                break;
            case 'date':
                setNewBook({...newBook, date: event.target.value})
                break;
        }
    }; //end handleChangeBook

    //onClick function to submit books
    const handleSubmit = (event) => {
        console.log('clicked handleSubmit');

        //event.preventDefault();

        //setting date
        // setDate(date);

        //dispatch here:
        dispatch({
            type: 'ADD_BOOK',
            payload: newBook
        });

        //adding new media item
        setNewBook({
            media_type_id: '',
            title_book: '',
            author: '',
            thoughts_book: '',
            status_book: '',
            date: ''
        });

        history.push('/journal')

    }; //end handleSubmit

    //onClick function to cancel adding media and return to journal page
    const sendJournal = () => {
        history.push('/journal');
    }; //end sendHome

  return (
    <div>
      <Dialog
        open={openBook}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add A Book!</DialogTitle>
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
                value={newBook.date}
                onChange={(event) => handleChangeBook('date', event)}
                variant="outlined"
              />
            </div>

            {/* input fields for title, author, thoughts */}
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
                value={newBook.title_book}
                onChange={(event) => handleChangeBook('title_book', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-full-width"
                label="author ..."
                style={{ width: 250, margin: 8 }}
                placeholder="enter author"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newBook.author}
                onChange={(event) => handleChangeBook('author', event)}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="thoughts ..."
                placeholder="enter thoughts"
                multiline
                rows={4}
                style={{ width: 250, margin: 8 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={newBook.thoughts}
                onChange={(event) => handleChangeBook('thoughts_book', event)}
                variant="outlined"
              />
            </div>

            {/* Status of media dropdown */}
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="status-input">status ...</InputLabel>
                <Select
                  labelId="status-input"
                  id="simple-select-outlined"
                  value={newBook.status_book}
                  onChange={(event) => handleChangeBook('status_book', event)}
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
            {/* <Button
                                    variant="outlined"
                                    onClick={handleAddMedia}
                                >
                                    Add Media
                                </Button> */}
            <Button variant="outlined" onClick={handleSubmitBook}>
              Submit
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
} //end AddBook



export default AddBook;