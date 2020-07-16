import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  //...
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
