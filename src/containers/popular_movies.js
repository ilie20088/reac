import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDefaultMovies } from '../actions/index';
import MovieTable from '../components/movie_table';


class PopularMovies extends Component{

	componentWillMount(){
		this.props.getDefaultMovies();
	}

	render(){
		return(
			<div>
				<MovieTable movies={this.props.defaultMovies} genres={this.props.genres} title="Top popular movies"/>		
			</div>
		);
	}

	
}

const mapStateToProps = (state) => {
  	return {
    	defaultMovies: state.defaultMovies,
    	genres: state.genres
  	}
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	getDefaultMovies: () => dispatch(getDefaultMovies())
  	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
