import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MovieTable extends Component{

	render(){
		return(
			<div className="clearfix">
				<h4>{this.props.title}</h4>
				{(this.props.movies == null || this.props.genres == null) ? this.loading() : this.renderMovies()}	
			</div>
		);
	}

	loading(){
		return <span>Loading....</span>;
	}

	renderMovies(){
		return( 
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Genres</th>
					</tr>
				</thead>
				<tbody>
				{this.props.movies.map((el) => this.renderRow(el))}
				</tbody>
			</table>
		);
	}

	renderRow(row){
		let urlToMovie = `/movie/${row.id}`;
		return( 
			<tr key={row.id}>
				<td><Link to={urlToMovie}>{row.original_title}</Link></td>
				<td>{this.renderGenres(row.genre_ids)}</td>
			</tr>
		)
	}

	renderGenres(genres){
		let result = genres.
				map(id => {
					for(let i in this.props.genres){
						if(this.props.genres[i].id == id){
							return this.props.genres[i].name;
						}
					}
				}).
				join(",");
		return <span>{result}</span>;
	}
}
