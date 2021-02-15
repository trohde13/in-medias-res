import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
//generator function to GET entry for EDIT: will be fired on GET_ENTRY
function* getEntry(action) {
    try {
        const response = yield axios.get(`/media/${action.payload}`)
        console.log(response.data[0]);
        yield put({ type: 'SET_EDIT_ENTRY', payload: response.data[0]})
    } catch (error) {
        console.log('ERROR in getENTRY', error)
    }
}; //end getEntry

//generator PUT function to save changes from EDIT: will be fired on SAVE_EDIT
function* saveEdit(action) {
    console.log(action);
    yield axios.put(`/media/${action.payload.id}`, action.payload)
}; //end saveEdit







function* editSaga() {
    yield takeEvery('GET_ENTRY', getEntry);
    yield takeEvery('SAVE_EDIT', saveEdit);
  }

export default editSaga;