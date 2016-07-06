import {GET_GENRE_MOVIES} from '../constants';

export const genreMoviesReducer = (state = null, action) => {
	switch(action.type){
		case GET_GENRE_MOVIES:
			return action.payload.data.results
		default: 
			return state;
	}
};