import {GET_GENRES} from '../constants';

export const getGenresReducer = (state = null, action) => {
	switch(action.type){
		case GET_GENRES:
			return action.payload.data.genres;
		default: 
			return state;
	}
};