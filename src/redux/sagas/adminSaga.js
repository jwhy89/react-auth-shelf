import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchCount () {
    try {
        const count = yield axios.get('/api/shelf/admin');
        console.log(`shelf.data is`, count.data);
        yield put({ type: 'SET_COUNT', payload: count.data })
    }
    catch( error ) {
        console.log(`couldn't get item count`, error);
        alert(`Sorry, couldn't get your item's count to display.`);
    }
}
export default fetchCount;