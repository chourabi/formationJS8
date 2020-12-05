import logo from './logo.svg';
import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

class App extends React.Component {

  constructor(props){
    super(props);
  }





  render(){
    return (
        <Router>

      <div>




        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">TorMovies</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" component={Movies} exact ></Route>
          <Route path="/movies" component={Movies} exact ></Route>
          <Route path="/moviedetails/:id" component={MovieDetails} exact></Route>

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
