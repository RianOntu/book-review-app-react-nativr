import {createStore} from 'redux';
import {bookReducer} from './reducer';

const store=createStore(bookReducer);

export default store;