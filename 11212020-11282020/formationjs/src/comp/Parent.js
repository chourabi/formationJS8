import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            childResponse:""
        }


        this.myChildCalledMe=this.myChildCalledMe.bind(this);
    }


    myChildCalledMe(param){
        this.setState({
            childResponse:param
        })
    }


    render(){
        return(
            <div>
                <h1>I'm the parent</h1>
                <p>calling child</p>
                <Child name="max" call={this.myChildCalledMe} />

                <p> {this.state.childResponse} </p>

            </div>
        );
    }
}

export default Parent;