import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA
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

//generator function to GET finished books: will be fired on FETCH_BOOK
function* fetchBook() {
    try {
        const book = yield axios.get('/api/book');
        console.log('get all:', book.data);
        yield put({ type: 'SET_BOOK', payload: book.data });
    } catch {
        console.error('ERROR in getting book', error)
    }

}; //end fetchBook




function* bookSaga() {
    yield takeEvery('ADD_BOOK', addBook);
    yield takeEvery('FETCH_BOOK', fetchBook);
  }

export default bookSaga;