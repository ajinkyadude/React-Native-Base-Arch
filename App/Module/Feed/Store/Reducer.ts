import {createAction, createSlice} from '@reduxjs/toolkit';
import {SubmitLoginAction} from './Create-Async-Action';
import {AuthInterceptorImpl} from './SampleInterceptor';

const initialState = {
  start: 0,
};

const authInterceptorImpl = AuthInterceptorImpl.getInstance();
const FeedReducer = createSlice({
  name: 'Feed',
  initialState,
  reducers: {
    changeStartValue: (state, action): any => {
      console.log('************  1  ****************  ' + state.start);
      console.log(' **********   2  **************  ' + action.payload);

      state.start = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(SubmitLoginAction.pending, (state: any) => {
        authInterceptorImpl.handlePending(state);
      })
      .addCase(SubmitLoginAction.rejected, (state: any, action: any) => {
        authInterceptorImpl.handleRejected(state, action);
      })
      .addCase(SubmitLoginAction.fulfilled, (state: any, action: any) => {
        authInterceptorImpl.handleFulfilled(state, action);
      });
  },
});

const feedReducer = FeedReducer.reducer;

export const {changeStartValue} = FeedReducer.actions;

export default feedReducer;
