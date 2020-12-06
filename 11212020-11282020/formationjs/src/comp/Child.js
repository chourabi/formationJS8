import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            name: props.name,
            call: props.call
        }
    }


    render(){
        return(
            <div>
                <h1>I'm the child, my name is  {this.state.name} </h1>
                <button onClick={ ()=>{  this.state.call("hi parent")   } } >call my parent</button>
 
            </div>
        );
    }
}

export default Child;