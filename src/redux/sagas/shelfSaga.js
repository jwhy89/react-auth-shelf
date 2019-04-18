import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf () {
    try{
        const shelf = yield axios.get('/api/shelf');
        console.log(`shelf.data is`, shelf.data);
        yield put({ type: 'SET_SHELF', payload: shelf.data })
    }
    catch( error ){
        console.log(`couldn't get shelf items`, error);
        alert(`Sorry, couldn't get your shelf to display.`);
    }
}

export default shelfSaga;