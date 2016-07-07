import axios from 'axios';

import { REQUEST_DEFAULT_MOVIES, DEFAULT_MOVIES, GET_MOVIE, GET_GENRES, GET_GENRE_MOVIES } from '../constants';
import { API_KEY, ROOT_URL } from '../constants';


/*
* Using thunks
*/
export function getDefaultMovies(){
	return (dispatch) => {
		dispatch({
			type: REQUEST_DEFAULT_MOVIES
		});


		const url = ROOT_URL + "movie/popular?" + API_KEY;
		const request = axios.get(url);

		request.then(function(data){
			dispatch({
				type: DEFAULT_MOVIES,
				payload: data
			});	
		});
	}

}

/*
* Using promises
*/
export function getGenres(){
	const url = ROOT_URL + "genre/movie/list?" + API_KEY;
	const request = axios.get(url);

	return {
		type: GET_GENRES,
		payload: request
	}
}

 
export function getMovie(id){
	const url = ROOT_URL + "movie/" + id + "?" + API_KEY;
	const request = axios.get(url);
	return {
		type: GET_MOVIE,
		payload: request
	}
}

export function getGenreMovies(genreId){
	const url = ROOT_URL + "genre/" + genreId  + "/movies?" + API_KEY;
	const request = axios.get(url);
	return {
		type: GET_GENRE_MOVIES,
		payload: request
	}
}