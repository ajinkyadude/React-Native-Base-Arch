import {PayloadAction} from '@reduxjs/toolkit';
import {InstanceGetUtility} from './InstanceUtility';

export interface AuthInterceptor {
  handlePending(state: any): void;
  handleRejected(state: any, action: any): void;
  handleFulfilled(state: any, action: any): void;
}

export class AuthInterceptorImpl implements AuthInterceptor {
  handlePending(state: any): void {
    // state.loading = true;
    // state.loginFormValue.isError = '';
    console.log('Pending state ******  '+JSON.stringify(state));
  }
  handleRejected(state: any, action: any): void {
    // state.loading = false;
    // state.loginFormValue.isError = action?.error?.message;
    // console.log('error.......' + action?.error?.message);
    console.log('Rejected State  *********  ');
  }
  handleFulfilled(state: any, action: any): void {
    // state.loading = true;
    // state.loginFormValue.isError = '';
    // state.refData = action.payload.data;
    console.log(
      ' Fulfilled  state *********  ' + JSON.stringify(action.payload),
    );
    state.start = 20
  }
  private static INSTANCE: AuthInterceptorImpl;
  static getInstance(): AuthInterceptor {
    this.INSTANCE = InstanceGetUtility.getInstance(
      AuthInterceptorImpl,
      this.INSTANCE,
    );
    return this.INSTANCE;
  }
}
