import React, { Component } from 'react';
import { getMovie } from '../actions/index';
import { connect } from 'react-redux';


class Movie extends Component {
	componentWillMount(){
		this.props.getMovie(this.props.params.id);
	}

	render(){
		if(this.props.movie == null){
			return <span>Loading</span>
		}

		return(
			<div>
				<img className="pull-right" src={this.props.movie.poster_url} style={{marginLeft: 10}}/>
				<h3><u>Movie: {this.props.movie.title}</u> </h3>
				<div><span><b>Overview</b>: {this.props.movie.overview}</span></div>
				<div><span><b>Budget</b>: {this.props.movie.budget} dollars</span></div>
				<div>
					<b>Genres:</b> {this.renderGenres()}
				</div>
			</div>
		);
	}

	renderGenres(){
		if(this.props.movie.genres != null && this.props.movie.genres.length != 0){
			return this.props.movie.genres.map(el => el.name).join(",");
		}else{
			return "Film has not any genres";
		}
	}
}


const mapStateToProps = (state) => {
	return {
		movie: state.movie
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMovie: (id) => dispatch(getMovie(id))
	}
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);