import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSlice from '../home/authSlice';


const MainPage = () => {
    const [count, setcount] = useState(0)
    const user = useSelector((state) => state.auth.userName);
    const counter = useSelector((state) => state.auth.authCounter);

    const dispatch = useDispatch();
    console.log(count);
    return (
        <div>
            <h1>MainPage</h1>
            <div> username:= {user}</div>
            <input type="text" onChange={(e) => { setcount(parseInt(e.target.value)) }}></input>
            <button onClick={() => { dispatch(authSlice.increaseCount(count)) }}>Increment</button>
            <button onClick={() => { dispatch(authSlice.decreaseCount(count)) }}>Decrement</button>
            <div>{counter}</div>
        </div>
    );
}
export default MainPage;