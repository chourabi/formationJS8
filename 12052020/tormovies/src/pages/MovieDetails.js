
import React from 'react';

class MovieDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        movieDetails : {},
        isLoading:true
    }
  }


  componentDidMount(){
      this.getUrlParams();
  }


  getUrlParams(){
    const id = this.props.match.params.id;

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d0b29b3d49efbc82e7da5ccbbaeab37f81607172674; PHPSESSID=puv79c5kder4qasia7te1kfq8e");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+id, requestOptions)
    .then(response => response.text())
    .then((result) => {
        const m = JSON.parse(result);
        this.setState({
            movieDetails: m.data.movie,
            isLoading:false
        })
    })
    .catch(error => console.log('error', error));


  }




  render(){
    
    return (
        <div>
            {
                this.state.isLoading ?
                <div style={{textAlign:'center'}}>chargement...</div>
                :
                <div>
                    <h1>{this.state.movieDetails.title_english}</h1>
                    <img style={{width:'150px'}} src={this.state.movieDetails.large_cover_image} />
                    <p>{ this.state.movieDetails.description_full }</p>
                </div>
            }
        </div>
    );
  }
}

export default MovieDetails;
