import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from '@material-ui/core';
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
  }
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

    

    const [newMedia, setNewMedia] = React.useState({
        media_type_id: '',
        title_book: '',
        author: '',
        thoughts_book: '',
        status_book: '',
        title_movie: '',
        year: '',
        thoughts_movie: '',
        status_movie: '',
        title_television: '',
        season_television: '',
        episode_television: '',
        thoughts_television: '',
        status_television: '',
        title_podcast: '',
        season_podcast: '',
        episode_podcast: '',
        thoughts_podcast: '',
        status_podcast: '',
        date: ''
    });

    // const [date, setDate] = useState(new Date());


    //function to update state from input fields
    const handleChange = (key, event) => {
        console.log('in handleChange')

        switch(key){
            case 'media_type_id':
                setNewMedia({...newMedia, media_type_id: event.target.value})
                break;
            case 'title_book':
                setNewMedia({...newMedia, title_book: event.target.value})
                break;
            case 'author':
                setNewMedia({...newMedia, author: event.target.value})
                break;
            case 'thoughts_book':
                setNewMedia({...newMedia, thoughts_book: event.target.value})
                break;
            case 'status_book':
                setNewMedia({...newMedia, status_book: event.target.value})
                break;
            case 'title_movie':
                setNewMedia({...newMedia, title_movie: event.target.value})
                break;
            case 'year':
                setNewMedia({...newMedia, year: event.target.value})
                break;
            case 'thoughts_movie':
                setNewMedia({...newMedia, thoughts_movie: event.target.value})
                break;
            case 'status_movie':
                setNewMedia({...newMedia, status_movie: event.target.value})
                break;    
            case 'title_television':
                setNewMedia({...newMedia, title_television: event.target.value})
                break;
            case 'season_television':
                setNewMedia({...newMedia, season_television: event.target.value})
                break;
            case 'episode_television':
                setNewMedia({...newMedia, episode_television: event.target.value})
                break;
            case 'thoughts_television':
                setNewMedia({...newMedia, thoughts_television: event.target.value})
                break;
            case 'status_television':
                setNewMedia({...newMedia, status_television: event.target.value})
                break;
            case 'title_podcast':
                setNewMedia({...newMedia, title_podcast: event.target.value})
                break;
            case 'season_podcast':
                setNewMedia({...newMedia, season_podcast: event.target.value})
                break;
            case 'episode_podcast':
                setNewMedia({...newMedia, episode_podcast: event.target.value})
                break;
            case 'thoughts_podcast':
                setNewMedia({...newMedia, thoughts_podcast: event.target.value})
                break;
            case 'status_podcast':
                setNewMedia({...newMedia, status_podcast: event.target.value})
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
        //dispatch here:
        dispatch({
            type: 'ADD_MEDIA',
            payload: newMedia
        });

        //adding new media item
        setNewMedia({
            media_type_id: '',
            title_book: '',
            author: '',
            thoughts_book: '',
            status_book: '',
            title_movie: '',
            year: '',
            thoughts_movie: '',
            status_movie: '',
            title_television: '',
            season_television: '',
            episode_television: '',
            thoughts_television: '',
            status_television: '',
            title_podcast: '',
            season_podcast: '',
            episode_podcast: '',
            thoughts_podcast: '',
            status_podcast: '',
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
            title_book: '',
            author: '',
            thoughts_book: '',
            status_book: '',
            title_movie: '',
            year: '',
            thoughts_movie: '',
            status_movie: '',
            title_television: '',
            season_television: '',
            episode_television: '',
            thoughts_television: '',
            status_television: '',
            title_podcast: '',
            season_podcast: '',
            episode_podcast: '',
            thoughts_podcast: '',
            status_podcast: '',
            date: ''
        });

        history.push('/journal')

    }; //end handleSubmit


    return (
        <div className={classes.root}>

            <div>
                <Button
                    variant="outlined"
                    onClick={handleClickOpenBook}
                >
                     Add Book
                </Button>

                {/* Dialog Form */}
                <div>
                    <Dialog open={openBook} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                        {/* select date for entry */}
                        <div>
                            <DatePicker
                                onChange={setNewMedia}
                                value={newMedia.date}
                                className="datePicker"
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

                        {/* Status of media dropdown */}
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
                        </div>    
                        </DialogContentText>
                        </DialogContent>

                        {/* buttons for cancel, add new media, submit */}
                        <DialogActions>
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
                        </DialogActions>
                    </Dialog>
                </div>

                <Button
                    variant="outlined"
                    onClick={handleClickOpenMovie}
                >
                    Add Movie
                </Button>

                    {/* Dialog form */}
                    <div>
                            <Dialog open={openMovie} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                {/* select date for entry */}
                                <div>
                                    <DatePicker
                                        onChange={setNewMedia}
                                        value={newMedia.date}
                                        className="datePicker"
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
                                        value={newMedia.title}
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
                                        value={newMedia.year}
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
                                        defaultValue="Default Value"
                                        value={newMedia.thoughts}
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
                                </div>    
                                </DialogContentText>
                                </DialogContent>

                                {/* buttons for cancel, add new media, submit */}
                                <DialogActions>
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
                                </DialogActions>
                            </Dialog>
                        </div>

                <Button
                    variant="outlined"
                    onClick={handleClickOpenTelevision}
                >
                    Add Television
                </Button>

                {/* Dialog form */}
                <div>
                            <Dialog open={openTelevision} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                {/* select date for entry */}
                                <div>
                                    <DatePicker
                                        onChange={setNewMedia}
                                        value={newMedia.date}
                                        className="datePicker"
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
                                        value={newMedia.title}
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
                                        value={newMedia.season}
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
                                        value={newMedia.episode}
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
                                </div>    
                                </DialogContentText>
                                </DialogContent>

                                {/* buttons for cancel, add new media, submit */}
                                <DialogActions>
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
                                </DialogActions>
                            </Dialog>
                        </div>
                                        

                <Button
                    variant="outlined"
                    onClick={handleClickOpenPodcast}
                >
                    Add Podcast
                </Button>

                <div>
                            <Dialog open={openPodcast} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                {/* select date for entry */}
                                <div>
                                    <DatePicker
                                        onChange={setNewMedia}
                                        value={newMedia.date}
                                        className="datePicker"
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
                                        value={newMedia.title}
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
                                        value={newMedia.season}
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
                                        value={newMedia.episode}
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
                                </div>    
                                </DialogContentText>
                                </DialogContent>

                                {/* buttons for cancel, add new media, submit */}
                                <DialogActions>
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
                                </DialogActions>
                            </Dialog>
                        </div>
            </div>

            
            {/* select media type */}
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="type-input">media type ...</InputLabel>
                    <Select
                    labelId="type-input"
                    id="simple-select-outlined"
                    value={newMedia.media_type_id}
                    onChange={(event) => handleChange('media_type_id', event)}
                    label="type"
                    style={{ width: 250, margin: 8 }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1} >Book</MenuItem>
                    </Select>
                </FormControl>
            </div>

            
        </div>

    )

}; //end AddEntry

export default AddEntry;