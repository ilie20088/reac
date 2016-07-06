import React, {Component} from 'react';

import DOM from 'react-dom'
import Autocomplete from 'react-autocomplete';
import { getGenres, getGenreMovies } from '../actions/index';
import { connect } from 'react-redux';
import Typeahead from 'react-bootstrap-typeahead';

class SearchBar extends Component{
	static contextTypes = {
    	router: React.PropTypes.object
  	}

	constructor(props){
		super(props);
		this.state = {
			genreTerm: '', 
			value: '',
			genreId: -1
    	};
		this._handleChange = this._handleChange.bind(this); 
		this._handleSubmit = this._handleSubmit.bind(this); 
	}

	componentWillMount(){
		this.props.getGenres();
	}

	_handleChange(selectedItem){
		if(selectedItem.length != 0){
			this.setState({genreId: selectedItem[0].id});
		}
	}

	_handleSubmit(event){
		event.nativeEvent.preventDefault();
		if(this.state.genreId != -1){
			this.props.getGenreMovies(this.state.genreId);
			this.context.router.push("/genre/" + this.state.genreId);
		}
	}

	render(){
		let autocompleteData = this.props.genres ? this.props.genres : [{name: "Loading...", id: -1}];
		return (
			<div className="form-group clearfix">
				<form onSubmit={this._handleSubmit}>
					<Typeahead options={autocompleteData} labelKey="name" placeholder="Search a genre" onChange={this._handleChange} />
					<button type="submit" className="btn btn-primary" style={{ marginTop: 15, marginBottom: 15, float: "right"}}>
						Search
					</button>
				</form>	
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		genres: state.genres
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGenres: () => dispatch(getGenres()),
		getGenreMovies: (genreId) => dispatch(getGenreMovies(genreId))
	}
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);