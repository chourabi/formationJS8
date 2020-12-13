import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';





class App extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <div>

          <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/auth" component={Auth} exact></Route>
           
          </Switch>
        </div>
      </Router>


    );


  }




}

export default App;
