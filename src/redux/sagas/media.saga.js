import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
//generator function to GET all media from database: will be fired on FETCH_MEDIA actions
function* fetchMedia() {
    try {
        const media = yield axios.get('/api/media/');
        console.log('get all:', media.data);
        yield put({ type: 'SET_MEDIA', payload: media.data });
    } catch {
        console.error('ERROR in getting media', error)
    }

}; //end fetchMedia

//generator function to GET date array from database: will be fired on FETCH_DATE
function* fetchDate() {
    try {
        const date = yield axios.get('/api/media/datearray');
        console.log('get all:', date.data);
        yield put({ type: 'SET_DATE', payload: date.data });
    } catch {
        console.error('ERROR in getting date array', error)
    }

}; //end fetchDate


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
    yield takeEvery('FETCH_DATE', fetchDate);
    yield takeEvery('DELETE_MEDIA', deleteMedia);
  }

export default mediaSaga;