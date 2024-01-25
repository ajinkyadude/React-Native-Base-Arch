import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {persistReducerHead} from './Reducer';
import createSagaMiddleware from '@redux-saga/core';
import {RootSaga} from './RootSaga';

// const Store = configureStore({
//     reducer: persistReducerHead
// })

const sagaMiddleware = createSagaMiddleware();

export const createStore = () => {
  const Store = configureStore({
    reducer: persistReducerHead,
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(RootSaga);
  return Store;
};
