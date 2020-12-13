import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class Auth extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        email:'',
        password:''
    }

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    
  }


  emailChange(e){
      this.setState({
          email:e.target.value
      })
      
   
  }

  passwordChange(e){
    this.setState({
        password:e.target.value
    })
  }


  callAuthAPI(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"email":this.state.email,"password":this.state.password});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3002/auth", requestOptions)
      .then(response => response.text())
      .then((result) => {
        var jres = JSON.parse(result);
        if (jres.success) {
            localStorage.setItem('token',jres.token);
            this.props.history.push('/home');
        }else{
            alert("wrong email or password");
        }
      })
      .catch(error => console.log('error', error));


  }




  render(){

    
    return (
      <div className="App container">
        <h1>Auth works</h1>

        

       
            <div className="form-group">
                <label for="exampleInputEmail1">Email address {this.state.email}</label>
                <input onChange={ this.emailChange }  value={this.state.email} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password {this.state.password} </label>
                <input onChange={(e)=>{this.passwordChange(e)}} value={this.state.password} type="password" className="form-control"  placeholder="Password" />
            </div>
            {
                ((this.state.email ==='') && (this.state.password ==='') ) ?
                <button  className="btn btn-primary" disabled >CONNECT</button>
                :
                <button  className="btn btn-primary" onClick={()=>{ this.callAuthAPI() }}  >CONNECT</button>
            }
            
        


      </div>
    );


  }




}

export default Auth;
