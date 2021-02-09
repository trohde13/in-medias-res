import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from '@material-ui/core';
import DatePicker from 'react-date-picker';



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

    const [newMedia, setNewMedia] = React.useState({
        title: '',
        author: '',
        thoughts: '',
        status: ''
    });

    const [date, setDate] = useState(new Date());


    //function to update state from input fields
    const handleChange = (key, event) => {
        console.log('in handleChange')

        switch(key){
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
        }
    }


    

    
    // onClick to add new media
    const handleAddMedia = (event) => {
        console.log('clicked handleAddMedia');

        //event.preventDefault();

        //setting date
        // setSelectedDate(date);

        //dispatch here:

        //adding new media item
        setNewMedia({
            title: '',
            author: '',
            thoughts: '',
            status: ''
        });
    };


    return (
        <div className={classes.root}>

            {/* select date for entry */}
            <div className="datePicker">
                <DatePicker
                    onChange={setDate}
                    value={date}
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
                    <Button>Cancel</Button>
                    <Button>Add Media</Button>
                    <Button>Submit</Button>
                </div>
            </div>
        </div>

    )

}; //end AddEntry

export default AddEntry;