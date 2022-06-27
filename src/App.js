import Home from './components/home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import SignUp from './components/signup';
import { Link } from 'react-router-dom';



function App() {

  return (
    
     <Router>
          <div className="header">
          <Link className='link-out' to='/'>Log out</Link>
          </div>
      <Switch>
       <Route exact path="/" component={Login}></Route>
       <Route exact path="/signup" component={SignUp}></Route>
        <Route  path="/home" component={Home}></Route>
      </Switch>
     </Router>
  
    
  );
}

export default App;
