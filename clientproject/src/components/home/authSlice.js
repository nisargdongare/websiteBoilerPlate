import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
let baseUrl = "http://127.0.0.1:3000";


export const slice = createSlice({
  name: 'authReducer',
  initialState: {
    loading : false,
    userName: '',
    password: '',
    authCounter: 0
  }, 
  reducers: { // state change - state write
    loginUserName : (state, action) => {
      state.userName = action.payload ; 
    },
    increaseCount : (state,action)=> {
      state.authCounter = state.authCounter + action.payload ;
    },
    decreaseCount : (state,action)=> {
      state.authCounter = state.authCounter - action.payload ;
    }
  },
});

export const { loginUserName,increaseCount,decreaseCount } = slice.actions;

//=====================actions for backend calls========================

// userLogin action, axios call, network call
export const UserLogin = (data) => async dispatch =>  {
    //console.log('calling backend with post data',data);
    dispatch(loginUserName(data.userName));
    try {
      axios.post(baseUrl+'/login/',data)
      .then(response => {
        dispatch(loginUserName(response.data));
      }) 
    } catch (error) {
      console.log(error,"Backend Call Failed");
    }
 };

export default slice.reducer;