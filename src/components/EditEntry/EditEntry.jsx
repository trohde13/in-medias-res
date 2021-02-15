import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Button,
  Select,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function EditEntry() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const entry = useParams();
  const entryToEdit = useSelector((store) => store.edit);

  //retrieves the entry to edit by id of entry
  useEffect(() => {
    dispatch({ type: 'GET_ENTRY', payload: entry.id });
    console.log('in useEffect');
  }, []);

  //function to save the edited entry
  const saveEdit = () => {
    // triggers SAGA that will save the local changes to database
    dispatch({
      type: 'SAVE_EDIT',
      payload: entryToEdit,
    });
    history.push('/journal');
  }; //end saveEdit

  return (
    <>
      {entryToEdit.id && (
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6} sm={3}></Grid>
            <Grid item 
                justify="center"
                alignItems="center"
                xs={12} sm={6}>
              <div>
                <Typography variant="h5">Update Your Entry</Typography>
              </div>
              <Paper elevation={4}>
                {/* select date for entry */}

                <div>
                  <TextField
                    id="edit-date"
                    label="date ..."
                    style={{ width: 250, margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                    value={entryToEdit.date}
                    defaultValue={entryToEdit.date}
                    onChange={(event) => {
                      dispatch({
                        type: 'EDIT_DATE',
                        payload: event.target.value,
                      });
                    }}
                    variant="outlined"
                  />
                </div>

                {/* input fields for title, author, thoughts */}

                <div>
                  <TextField
                    id="edit-title"
                    label="title ..."
                    style={{ width: 250, margin: 8 }}
                    placeholder="enter title"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="text"
                    value={entryToEdit.title}
                    defaultValue={entryToEdit.title}
                    onChange={(event) => {
                      dispatch({
                        type: 'EDIT_TITLE',
                        payload: event.target.value,
                      });
                    }}
                    variant="outlined"
                  />
                </div>
                <div>
                  {entryToEdit.media_type_id === 1 ? (
                    <div>
                      <TextField
                        id="book-author"
                        label="author ..."
                        style={{ width: 250, margin: 8 }}
                        placeholder="enter author"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={entryToEdit.author}
                        defaultValue={entryToEdit.author}
                        onChange={(event) => {
                          dispatch({
                            type: 'EDIT_AUTHOR',
                            payload: event.target.value,
                          });
                        }}
                        variant="outlined"
                      />
                    </div>
                  ) : entryToEdit.media_type_id === 2 ? (
                    <div>
                      <TextField
                        id="movie-year"
                        label="year ..."
                        style={{ width: 250, margin: 8 }}
                        placeholder="enter year released"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={entryToEdit.year}
                        defaultValue={entryToEdit.year}
                        onChange={(event) => {
                          dispatch({
                            type: 'EDIT_YEAR',
                            payload: event.target.value,
                          });
                        }}
                        variant="outlined"
                      />
                    </div>
                  ) : entryToEdit.media_type_id === 3 ? (
                    <div>
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
                          value={entryToEdit.season}
                          defaultValue={entryToEdit.season}
                          onChange={(event) => {
                            dispatch({
                              type: 'EDIT_SEASON',
                              payload: event.target.value,
                            });
                          }}
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
                          value={entryToEdit.episode}
                          defaultValue={entryToEdit.episode}
                          onChange={(event) => {
                            dispatch({
                              type: 'EDIT_EPISODE',
                              payload: event.target.value,
                            });
                          }}
                          variant="outlined"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <TextField
                          id="podcast-season"
                          label="season ..."
                          style={{ width: 250, margin: 8 }}
                          placeholder="enter season number"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={entryToEdit.season}
                          defaultValue={entryToEdit.season}
                          onChange={(event) => {
                            dispatch({
                              type: 'EDIT_SEASON',
                              payload: event.target.value,
                            });
                          }}
                          variant="outlined"
                        />
                      </div>
                      <div>
                        <TextField
                          id="podcast-episode"
                          label="episode ..."
                          style={{ width: 250, margin: 8 }}
                          placeholder="enter episode number"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={entryToEdit.episode}
                          defaultValue={entryToEdit.episode}
                          onChange={(event) => {
                            dispatch({
                              type: 'EDIT_EPISODE',
                              payload: event.target.value,
                            });
                          }}
                          variant="outlined"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <TextField
                    id="book-thoughts"
                    label="thoughts ..."
                    placeholder="enter thoughts"
                    multiline
                    rows={4}
                    style={{ width: 250, margin: 8 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={entryToEdit.thoughts}
                    defaultValue={entryToEdit.thoughts}
                    onChange={(event) => {
                      dispatch({
                        type: 'EDIT_THOUGHTS',
                        payload: event.target.value,
                      });
                    }}
                    variant="outlined"
                  />
                </div>

                {/* Status of media dropdown */}
                <div>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="status-input">status ...</InputLabel>
                    <Select
                      labelId="status-input"
                      id="book-status"
                      value={entryToEdit.status}
                      defaultValue={entryToEdit.status}
                      label="status"
                      onChange={(event) => {
                        dispatch({
                          type: 'EDIT_STATUS',
                          payload: event.target.value,
                        });
                      }}
                      style={{ width: 250, margin: 8 }}
                    >
                      <MenuItem value={'None'}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Current'}>Current</MenuItem>
                      <MenuItem value={'Finished'}>Finished</MenuItem>
                      <MenuItem value={'Abandoned'}>Abandoned</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <Button onClick={saveEdit}>SAVE UPDATE</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}></Grid>
          </Grid>
        </div>
      )}
    </>
  );
} //end editEntry

export default EditEntry;
