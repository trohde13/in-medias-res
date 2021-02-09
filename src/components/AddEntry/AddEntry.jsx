import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from '@material-ui/core';
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
  }
}));


function AddEntry() {

    const classes = useStyles();

    const history = useHistory();

    const [newMedia, setNewMedia] = React.useState({
        media_type_id: '',
        title: '',
        author: '',
        thoughts: '',
        status: '',
        year: '',
        season: '',
        episode: '',
        date: ''
    });

    // const [date, setDate] = useState(new Date());


    //function to update state from input fields
    const handleChange = (key, event) => {
        console.log('in handleChange')

        switch(key){
            case 'media_type_id':
                setNewMedia({...newMedia, title: event.target.value})
                break;
            case 'title':
                setNewMedia({...newMedia, title: event.target.value})
                break;
            case 'author':
                setNewMedia({...newMedia, author: event.target.value})
                break;
            case 'thoughts':
                setNewMedia({...newMedia, thoughts: event.target.value})
                break;
            case 'status':
                setNewMedia({...newMedia, status: event.target.value})
                break;
            case 'year':
                setNewMedia({...newMedia, title: event.target.value})
                break;
            case 'season':
                setNewMedia({...newMedia, title: event.target.value})
                break;
            case 'episode':
                setNewMedia({...newMedia, title: event.target.value})
                break;
            case 'date':
                setNewMedia({...newMedia, title: event.target.value})
                break;
        }
    }; //end handleChange


    //CLICK FUNCTIONS:

    //onClick function to cancel adding media and return to journal page
    const sendJournal = () => {
        history.push('/journal');
    }; //end sendHome
    
    // onClick to add new media and reset add page
    const handleAddMedia = (event) => {
        console.log('clicked handleAddMedia');

        //event.preventDefault();

        //setting date
        // setDate(date);

        //dispatch here:
        dispatch({
            type: 'ADD_MEDIA',
            payload: newMedia
        });

        //adding new media item
        setNewMedia({
            media_type_id: '',
            title: '',
            author: '',
            thoughts: '',
            status: '',
            year: '',
            season: '',
            episode: '',
            date: ''
        });

        history.push('/add')

    }; //end handleAddMedia

    // onClick to add new media and reset add page
    const handleSubmit = (event) => {
        console.log('clicked handleSubmit');

        //event.preventDefault();

        //setting date
        // setDate(date);

        //dispatch here:
        dispatch({
            type: 'ADD_MEDIA',
            payload: newMedia
        });

        //adding new media item
        setNewMedia({
            media_type_id: '',
            title: '',
            author: '',
            thoughts: '',
            status: '',
            year: '',
            season: '',
            episode: ''
        });

        history.push('/journal')

    }; //end handleSubmit


    return (
        <div className={classes.root}>

            {/* select date for entry */}
            <div>
                <DatePicker
                    onChange={setNewMedia}
                    value={newMedia.date}
                    className="datePicker"
                />
            </div>
            {/* select media type */}
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="type-input">media type ...</InputLabel>
                    <Select
                    labelId="type-input"
                    id="simple-select-outlined"
                    value={newMedia.media_type_id}
                    onChange={(event) => handleChange('type', event)}
                    label="type"
                    style={{ width: 250, margin: 8 }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Book</MenuItem>
                    <MenuItem value={2}>Movie</MenuItem>
                    <MenuItem value={3}>Television</MenuItem>
                    <MenuItem value={4}>Podcast</MenuItem>
                    </Select>
                </FormControl>
            </div>

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
                    value={newMedia.title}
                    onChange={(event) => handleChange('title', event)}
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
                    value={newMedia.author}
                    onChange={(event) => handleChange('author', event)}
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
                    defaultValue="Default Value"
                    value={newMedia.thoughts}
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
                    value={newMedia.status}
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
                <div>
                    <Button
                        variant="outlined"
                        onClick={sendJournal}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleAddMedia}
                    >
                        Add Media
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>

    )

}; //end AddEntry

export default AddEntry;