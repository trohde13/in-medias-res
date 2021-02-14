import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
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

//generator function to GET finished podcasts: will be fired on FETCH_POD
function* fetchPodcast() {
    try {
        const podcast = yield axios.get('/api/podcast');
        console.log('get all:', podcast.data);
        yield put({ type: 'SET_POD', payload: podcast.data });
    } catch {
        console.error('ERROR in getting podcast', error)
    }

}; //end fetchPodcast





function* podcastSaga() {
    yield takeEvery('ADD_PODCAST', addPodcast);
    yield takeEvery('FETCH_POD', fetchPodcast);
  }

export default podcastSaga;
