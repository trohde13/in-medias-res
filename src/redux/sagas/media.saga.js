import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
//generator function to GET all media from database: will be fired on FETCH_MEDIA actions
function* fetchMedia() {
    try {
        const media = yield axios.get('/api/media');
        console.log('get all:', media.data);
        yield put({ type: 'SET_MOVIES', payload: media.data });
    } catch {
        console.error('ERROR in getting media', error)
    }

}; //end fetchMedia

//generator function to POST media to database: will be fired on ADD_MEDIA
function* addMedia() {
    try {
        console.log('post new media');
        const newMedia = action.payload;
        yield axios.post('/api/media', newMedia);
        yield put({ payload: action.payload })
    } catch (error) {
        console.log('ERROR in adding new media', error)
    }
}; //end addMedia


function* mediaSaga() {
    yield takeEvery('FETCH_MEDIA', fetchMedia);
    yield takeEvery('ADD_MEDIA', addMedia);
  }

export default mediaSaga;