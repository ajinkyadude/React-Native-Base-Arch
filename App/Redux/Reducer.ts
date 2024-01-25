import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import feedReducer from '../Module/Feed/Store/Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  feed: feedReducer,
});

export const persistReducerHead = persistReducer(persistConfig, rootReducer);
