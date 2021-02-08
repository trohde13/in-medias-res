import React from 'react';
import { Grid, TextField, makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function AddEntry() {

    const classes = useStyles();

    const [newMedia, setNewMedia] = React.useState({
        title: '',
        author: '',
        thoughts: '',
        status: ''
    });

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    

    
    // onClick to add new media
    const handleAddMedia = (event) => {
        console.log('clicked handleAddMedia');

        event.preventDefault();

        //setting date
        setSelectedDate(date);

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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="select date for entry"
                    value={selectedDate}
                    onChange={(event) => handleAddMedia('author', event)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            {/* select media type */}
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="type-input">media type ...</InputLabel>
                    <Select
                    labelId="type-input"
                    id="simple-select-outlined"
                    value={newMedia.media_type_id}
                    onChange={(event) => handleAddMedia('type', event)}
                    label="type"
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
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={newMedia.title}
                    onChange={(event) => handleAddMedia('title', event)}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-full-width"
                    label="author ..."
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={newMedia.author}
                    onChange={(event) => handleAddMedia('author', event)}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="thoughts ..."
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    value={newMedia.thoughts}
                    onChange={(event) => handleAddMedia('thoughts', event)}
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
                    onChange={(event) => handleAddMedia('status', event)}
                    label="status"
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
        </div>

    )

}; //end AddEntry