import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getGenreMovies } from '../actions/index';
import MovieTable from '../components/movie_table';


class GenreMovies extends Component{

	componentWillMount(){
		this.props.getGenreMovies(this.props.params.id);
	}

	render(){
		return(
			<div>
				<MovieTable movies={this.props.genreMovies} genres={this.props.genres} title="Genre Movies"/>		
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  	return {
    	genreMovies: state.genreMovies,
    	genres: state.genres
  	}
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	getGenreMovies: (genreId) => dispatch(getGenreMovies(genreId))
  	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreMovies);
