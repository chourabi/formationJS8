import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './comp/User';
import LikeBtn from './comp/LikeBtn';
import Article from './comp/Article';
import ContactForm from './comp/ContactForm';
import Parent from './comp/Parent';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
  
  
  constructor(props){
    super(props);

    this.state = {
      nbrUsers:2,
      arrUsers: [
        { name:"chourabi taher", phone:"+216 93 863 732", email:"tchourabi@gmaol.com" },
        { name:"chourabi taher 2", phone:"+216 93 863 732", email:"tchourabi@gmaol.com" },
        
      ],
      msg:"Loading...",
      date: new Date(),

      articles:[
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png",  title:"first article", description:" article description", didLike:true, counter:50 },
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png", title:"second article", description:" article description", didLike:false, counter:0 },
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png", title:"third article", description:" article description", didLike:true, counter:11 },
        
      ],


      isConnected: true,
      isConfirmed: true



    };

    console.log("constructor");

    this.updateUI = this.updateUI.bind(this);

  }


  componentDidMount(){
    console.log("component did mount");
    this.setState({
      msg:"welcome"
    })
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  componentDidCatch(){
    console.log("compoent did catch");
  }


  updateUI(){
    this.setState({
      date: new Date()
    })
  }


  render (){
   
    return(

      <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/home/123/569">Home</Link>
            </li>

            
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>

            


          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          



            <Route path="/about" component={About} exact />

          <Route path="/users/:id">
            <Users />
          </Route>


          <Route path="/home/:id/:id2">
            <HomeP />
          </Route>

          <Route path="/home">
            <Home />
          </Route>


          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
         

          
          
        </Switch>
      </div>
    </Router>


    );
    

  }
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function HomeP(){
  let z = useParams();
  console.log(z);

  return <div>home with params</div>;
}



function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:x`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { x } = useParams();


  return <h3>Requested topic ID: {x}</h3>;
}




export default App;
