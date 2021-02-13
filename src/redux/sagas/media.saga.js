import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
//generator function to GET all media from database: will be fired on FETCH_MEDIA actions
function* fetchMedia() {
    try {
        const media = yield axios.get('/api/media');
        console.log('get all:', media.data);
        yield put({ type: 'SET_MEDIA', payload: media.data });
    } catch {
        console.error('ERROR in getting media', error)
    }

}; //end fetchMedia

//generator function to POST books to database: will be fired on ADD_BOOK
function* addBook(action) {
    try {
        console.log('post new book');
        const newBook = action.payload;
        yield axios.post('/api/book', newBook);
        yield put({ type: 'FETCH_MEDIA' })
    } catch (error) {
        console.log('ERROR in adding new book', error)
    }
}; //end addBook

//generator function to POST movies to database: will be fired on ADD_MOVIE
function* addMovie(action) {
    try {
        console.log('post new movie');
        const newMovie = action.payload;
        yield axios.post('/api/movie', newMovie);
        yield put({ type: 'FETCH_MEDIA' })
    } catch (error) {
        console.log('ERROR in adding new movie', error)
    }
}; //end addMovie

//generator function to POST television to database: will be fired on ADD_TELEVISION
function* addTelevision(action) {
    try {
        console.log('post new television');
        const newTelevision = action.payload;
        yield axios.post('/api/television', newTelevision);
        yield put({ type: 'FETCH_MEDIA' })
    } catch (error) {
        console.log('ERROR in adding new television', error)
    }
}; //end addTelevision

//generator function to POST podcasts to database: will be fired on ADD_PODCAST
function* addPodcast(action) {
    try {
        console.log('post new podcast');
        const newPodcast = action.payload;
        yield axios.post('/api/podcast', newPodcast);
        yield put({ type: 'FETCH_MEDIA' })
    } catch (error) {
        console.log('ERROR in adding new podcast', error)
    }
}; //end addPodcast

//generator function to DELETE item: will be fired on 'DELETE_MEDIA'
function* deleteMedia(action) {
    try {
        const mediaId = action.payload;
        yield axios.delete(`/api/media/${mediaId}`);
        yield put({ type: 'FETCH_MEDIA' });
    } catch (error) {
        console.log('error in deleting media', error)
    }
}


function* mediaSaga() {
    yield takeEvery('FETCH_MEDIA', fetchMedia);
    yield takeEvery('ADD_BOOK', addBook);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('ADD_TELEVISION', addTelevision);
    yield takeEvery('ADD_PODCAST', addPodcast);
    yield takeEvery('DELETE_MEDIA', deleteMedia);
  }

export default mediaSaga;