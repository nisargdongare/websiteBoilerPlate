
import React from 'react';
import Home from  '../src/components/home';
import About from  '../src/components/About';
import Dashboard from  '../src/components/Dashboard';


const App = () => 
{
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
        </Switch>
        <hr />
      </div>
    </Router>
  );
}
export default App;
