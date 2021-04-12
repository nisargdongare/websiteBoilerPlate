import React from 'react';
import Home from './components/home/home';
import MainPage from './components/mainPage/mainPage';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mainPage">mainPage</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/mainPage"><MainPage/></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
