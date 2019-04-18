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
        const additem = yield axios.post('/api/shelf', action.payload);
        console.log(`item data is`, addItem);
        yield put({ type: 'ADD_ITEM' })
    }
    catch( error ) {
        console.log(`error adding item to shelf`, error);
        alert(`Sorry, couldn't add item to YOUR shelf.`)
    }
}

function* deleteItem ( action ) {
    try {
        const removeItem = yield axios.delete(`/api/shelf/${action.payload}`);
        console.log(`id for item to delete is`, removeItem);
        yield put({ type: 'DELETE_ITEM' });
    }
    catch ( error ) {
        console.log(`error adding item to shelf`, error);
        alert(`Sorry, couldn't delete YOUR item`);
    }
}

export default shelfSaga;