import { DEFAULT_MOVIES, REQUEST_DEFAULT_MOVIES } from '../constants';

export const defaultMoviesReducer = (state = null, action) => {
	switch(action.type){
		case REQUEST_DEFAULT_MOVIES:
			console.log('Requesting default movies');
			return null;
		case DEFAULT_MOVIES:
			return action.payload.data.results
		default: 
			return state;
	}
};