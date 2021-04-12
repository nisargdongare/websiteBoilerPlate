import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as StoreSlice from './authSlice';

const Home = () => {
  let history = useHistory();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onsubmit = (data) => {
    if(userName){
      dispatch(StoreSlice.UserLogin({ userName, password }));
      history.push('/mainPage');
    }
  }

  console.log(userName);
  console.log(password);
  return (
    <div>
      <h1>Home</h1>
      <h2>Login Page</h2>
      <h3>UserName</h3>
      <input type="text" placeholder="UserName" onChange={(e) => { setuserName(e.target.value) }} />
      <h3>Password</h3>
      <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={() => onsubmit()}>submit</button>
    </div>
  );
}
export default Home;