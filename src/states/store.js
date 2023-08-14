import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import sessionReducer from './sessionSlice'
import persistReducer from 'redux-persist/es/persistReducer';


const reducers = combineReducers({
  session: sessionReducer,

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
})