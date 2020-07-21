import {combineReducers} from 'redux';

import book from './book';
import auth from './auth';
import author from './author';
import genre from './genre';
import transaction from './transaction';

export default combineReducers({book, transaction, genre, auth, author});
