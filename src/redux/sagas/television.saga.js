import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
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

//generator function to GET finished television: will be fired on FETCH_TV
function* fetchTelevision() {
    try {
        const television = yield axios.get('/api/television');
        console.log('get all:', television.data);
        yield put({ type: 'SET_TV', payload: television.data });
    } catch {
        console.error('ERROR in getting television', error)
    }

}; //end fetchTelevision





function* televisionSaga() {
    yield takeEvery('ADD_TELEVISION', addTelevision);
    yield takeEvery('FETCH_TV', fetchTelevision);
  }

export default televisionSaga;