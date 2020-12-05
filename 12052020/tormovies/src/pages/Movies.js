
import React from 'react';
import MovieCard from '../component/MovieCard';

class Movies extends React.Component {

  constructor(props){
    super(props);

    this.state={
        movies:[]
    }
    this.getMoviesList = this.getMoviesList.bind(this);
  }

  componentDidMount(){
      this.getMoviesList();
  }


  getMoviesList(){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d0b29b3d49efbc82e7da5ccbbaeab37f81607172674; PHPSESSID=puv79c5kder4qasia7te1kfq8e");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://yts.mx/api/v2/list_movies.json?limit=50", requestOptions)
      .then(response => response.text())
      .then((result) => {
        const moviesList = JSON.parse(result);

        this.setState({
            movies:moviesList.data.movies
        })
      })
      .catch(error => console.log('error', error));
  }



  render(){
    return (
        <div className="container">
            <h1>Movies</h1>
            <hr/>
            <div className="movieslist">
                <div className="row">

                    {
                        this.state.movies.map((movie)=>{
                            return <MovieCard id={movie.id} title={movie.title_english} bgImg={movie.large_cover_image} />

                        })
                    }
                </div>

            </div>
        </div>
    );
  }
}

export default Movies;
