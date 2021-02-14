import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
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

//generator function to GET finished movies: will be fired on FETCH_MOVIE
function* fetchMovie() {
    try {
        const movie = yield axios.get('/api/movie');
        console.log('get all:', movie.data);
        yield put({ type: 'SET_MOVIE', payload: movie.data });
    } catch {
        console.error('ERROR in getting movie', error)
    }

}; //end fetchMovie





function* movieSaga() {
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
  }

export default movieSaga;