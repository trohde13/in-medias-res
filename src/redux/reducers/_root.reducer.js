import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import media from './media.reducer';
import date from './date.reducer';
import book from './book.reducer';
import movie from './movie.reducer';
import television from './television.reducer';
import podcast from './podcast.reducer';
import edit from './edit.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  media, // stores media returned from server
  date, // stores date array returned from server
  book, // stores finished books returned from server
  movie, // stores finished moviess returned from server
  television, // stores finished television returned from server
  podcast, // stores finished podcasts returned from server
  edit, //stores entry to edit
});

export default rootReducer;
