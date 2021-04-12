import react,{useState} from 'react';
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');


  const onsubmit=(data)=>{
    
    history.push('/mainPage');
  }

  console.log(userName);
    return (
      <div>
          <h1>Home</h1>
          <h2>Login Page</h2>
          <h3>UserName</h3>
          <input type="text" placeholder="UserName" onChange={(e)=>{setuserName(e.target.value)}}/>
          <h3>Password</h3>
          <input type="text" placeholder="Password" type="password" onChange={(e)=>{setuserName(e.target.value)}}/>
          <button onClick={()=>onsubmit()}>submit</button>
      </div>
    );
  }
  export default Home;

  // history.push('/mainPage')