import {DEFAULT_MOVIES} from '../constants';

export const defaultMoviesReducer = (state = null, action) => {
	switch(action.type){
		case DEFAULT_MOVIES:
			return action.payload.data.results
		default: 
			return state;
	}
};