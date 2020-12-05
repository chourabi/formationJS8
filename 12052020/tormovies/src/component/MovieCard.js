import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  const style = {

  }

class MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:props.title,
            id:props.id,
            bgImg:props.bgImg
        }
    }

    formatMovieCardStyle(){
        return {
                backgroundImage:'url('+this.state.bgImg+')',
                backgroundSize: '100% 100%',
                height: '454px'
            }
        
    }



    render(){
        return(
            <div className="col-sm-4">
                        <div className="movie-card " style={this.formatMovieCardStyle()} >
                        <Link to={"/moviedetails/"+this.state.id}>
                            <div className="card" style={{backgroundColor:'transparent'}} >
                               <h5 className="movieTitle card-title">{this.state.title}</h5>
                                    
                                
                            </div></Link>
                        </div>
                    </div>

        );
    }
}

export default MovieCard;