import React from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovie = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?limit=50")
    await this.setState({movies, isLoading:false})
  }
  componentDidMount(){
    this.getMovie();
    
  };
  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : <div className="movies">
              {movies.map(movie=>{
                return <Movies
                          key={movie.id}
                          id={movie.id}
                          title={movie.title}
                          year={movie.year}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}
                          genres={movie.genres}
                        />
                }
              )}
            </div>
        }
      </section>
    )
  };
}

export default Home;