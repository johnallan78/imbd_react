import React from 'react';
// import MovieList from './MovieList.jsx'
import InfoBox from './InfoBox.jsx'
import Movie from './Movie.jsx'


class MovieBox extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      
      }
    }


render(){
  return(
    <div className="movie-box">
    <h2>UK Opening This Week</h2>
    
    <Movie data={this.state.data} />
    
    <div className="see-more">
    <h3>See more happening this week>></h3>
    </div>
    <div className="info-box">
    <InfoBox />
    </div>
    </div>
    )
  }

}

export default MovieBox;