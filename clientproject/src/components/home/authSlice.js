import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//let baseUrl = "http://127.0.0.1:3000";
let baseUrl = "";

export const slice = createSlice({
  name: 'authReducer',
  initialState: {
    loading : false,
    hasError : false,
    players :  { url1:'', url2:'' },
    gender: 'g',
    top: [],
    hits: 'loading hits...'
  },
  reducers: {
      reload : (state, action) => {
        state.players = action.payload ; 
      },
      toggleGender : (state)=> {
          if(state.gender==='g') state.gender='b';
          else                  state.gender='g';
      },
      topProfiles : (state,action) => {
        state.top = action.payload;
      },
      loadHits : (state,action)=> {
          state.hits = action.payload ;
      }
  },
});

export const { load,reload,toggleGender,topProfiles,loadHits } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// thunk api enabled
export const fetchPair = () => (dispatch,getState) =>  {
    let gender = getState().match.gender ;
    axios.get(baseUrl+'/pair/'+gender)
      .then(response => {
        dispatch(reload(response.data));
    });
 };

 // thunk api enabled
 export const matchPair = (data) => (dispatch,getState) =>  {
    let gender = getState().match.gender ;
    axios.post(baseUrl+'/match/'+gender,data)
      .then(response => {
        dispatch(reload(response.data));
    })
 };

 export const getTopThunk = (data) => (dispatch,getState) =>  {
    let gender = data ;
    axios.get(baseUrl+'/top/'+gender)
      .then(response => {
          dispatch(topProfiles(response.data));
    })
 };

 export const getHits = (data) => (dispatch,getState) =>  {

    axios.get(baseUrl+'/hits/')
      .then(response => {
          dispatch(loadHits(response.data.hits));
    })
 };



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPair = state => state.match.players;


export default slice.reducer;