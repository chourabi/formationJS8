import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class Todo extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        todo:props.todo,
        date:props.date,
        id:props.id,
        refresh:props.refresh,
        isupdating:false
    }


    console.log(props);
    
  }


  startUpdating(){
      this.setState({
          isupdating:true
      })
  }

  deleteTodo(){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "5fd5da9146b51c32ccb9a673");

var raw = JSON.stringify({"id":this.state.id});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3002/app/deletetodo", requestOptions)
  .then(response => response.text())
  .then(result => this.state.refresh())
  .catch(error => console.log('error', error));
  }


  updateView(e){
    this.setState({
        todo:e.target.value
    })
  }

  bgUpdate(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "5fd5da9146b51c32ccb9a673");
    
    var raw = JSON.stringify({"id":this.state.id,"newtodo":this.state.todo});
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3002/app/update", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({isupdating:false}))
      .catch(error => console.log('error', error));
  }



  render(){

    
    return (
      <div className="card my-2">
        <div className="card-body">
            <h6>{this.state.todo}</h6>
            <p> {this.state.date} </p>
            <button onClick={()=>{this.deleteTodo()}} className="btn btn-danger btn-sm">DELETE</button>
            <button onClick={ ()=>{ this.startUpdating() } } >UPDATE</button>
        
            {
                this.state.isupdating === true ?
                <div className="form-group">
                <label>UPDATE</label>
                <input className="form-control" value={this.state.todo} onChange={ (e)=>{this.updateView(e)}} />
                <button onClick={ ()=>{this.bgUpdate()}}  className="btn btn-primary" >UPDATE</button>
               </div> :
               <div></div>
            }

        </div>


      </div>
    );


  }




}

export default Todo;
