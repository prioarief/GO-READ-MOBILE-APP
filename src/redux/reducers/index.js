import {combineReducers} from 'redux';

import book from './book';
import auth from './auth';
import author from './author';
import genre from './genre';

export default combineReducers({book, genre, auth, author});
