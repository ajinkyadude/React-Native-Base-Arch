import { createAsyncThunk } from "@reduxjs/toolkit";
import feedReducer from "./Reducer";

export const SubmitLoginAction = createAsyncThunk<any, any, {state: any}>(
    'Feed' + '/login',
    async (_, thunkApi) => {
    //   const {role, FCMToken} = data;
    console.log("inside create async function *****   ");
    
      const $tokenData = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res: any) => {
        return res
      })
      console.log("tokenData  ****  "+JSON.stringify($tokenData));
      
  
      return $tokenData;
    },
  );