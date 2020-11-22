import React from 'react';
import LikeBtn from './LikeBtn';

class Article extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            title : props.params.title,
            description : props.params.description,
            didLike : props.params.didLike,
            counter : props.params.counter,
            img:props.params.img
            
        }


        
    }



    render(){
        return(
            <div>
                <img src={this.state.img} width="150px" />
                <h3> { this.state.title } </h3>
                <p> { this.state.description } </p>
                <LikeBtn counter={this.state.counter} didLike={this.state.didLike} />
            </div>
        );
    }
}

export default Article;