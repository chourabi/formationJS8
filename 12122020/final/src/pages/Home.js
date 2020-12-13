import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todo from '../comps/Todo';




class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        newtodo:'',
        todos:[]
    }

    this.getAllTodos = this.getAllTodos.bind(this);
  }

  componentDidMount(){
      const token  = window.localStorage.getItem('token');

      if (token != null) {
          console.log("connected");
          this.getAllTodos();
      } else {
          this.props.history.push('/auth');
      }

  }

  newTodoCahnge(e){
    this.setState({
        newtodo:e.target.value
    })
  }

  newTodo(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "5fd5da9146b51c32ccb9a673");
    
    var raw = JSON.stringify({"todo":this.state.newtodo});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3002/app/addtodo", requestOptions)
      .then(response => response.text())
      .then(result => this.getAllTodos())
      .catch(error => console.log('error', error));
  }



  getAllTodos(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "5fd5da9146b51c32ccb9a673");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3002/app/all", requestOptions)
      .then(response => response.text())
      .then((result) =>{
        var rs = JSON.parse(result);
        this.setState({
            todos:rs.todos
        })
      })
      .catch(error => console.log('error', error));
  }


  render(){
    return (
      <div className="container App">
        <h1>Home works</h1>

        {
            this.state.todos.map((todo)=>{
                return <Todo key={todo._id} id={todo._id} date={todo.date} todo={todo.todo} refresh={this.getAllTodos} />
            })
        }

       <div className="form-group">
        <label>New Todo</label>
        <input className="form-control" value={this.state.newtodo} onChange={(e)=>{this.newTodoCahnge(e)}} />
        <button disabled={this.state.newtodo === ''} onClick={ ()=>{this.newTodo()} } className="btn btn-primary" >ADD</button>
       </div> 


      </div>
    );


  }




}

export default Home;
