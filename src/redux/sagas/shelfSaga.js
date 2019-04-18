import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf () {
    try {
        const shelf = yield axios.get('/api/shelf');
        console.log(`shelf.data is`, shelf.data);
        yield put({ type: 'SET_SHELF', payload: shelf.data })
    }
    catch( error ) {
        console.log(`couldn't get shelf items`, error);
        alert(`Sorry, couldn't get your shelf to display.`);
    }
}

function* postItem ( action ) {
    try {
        const item = yield axios.post('/api/shelf', action.payload);
        console.log(`item data is`, item);
        yield put({ type: 'ADD_ITEM' })
    }
    catch( error ) {
        console.log(`error adding item to shelf`, error);
        alert(`Sorry, couldn't add item to YOUR shelf.`)
    }
}

export default shelfSaga;