import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './comp/User';

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
      date: new Date()
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
    <div>
      <h1> {this.state.date.toISOString()}  </h1>
      
      {/*
        this.state.arrUsers.map((user)=>{
          return <User name={user.name} phone={user.phone} email={user.email} />;
        })*/
      }

      <button onClick={ this.updateUI} > update UI </button>


    </div>);
  }
}

export default App;
