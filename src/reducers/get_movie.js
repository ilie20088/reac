import {GET_MOVIE, POSTER_PATH_ROOT} from '../constants';

export const getMovieReducer = (state = null, action) => {
	switch(action.type){
		case GET_MOVIE:
			const {id, genres, budget, title, overview, backdrop_path} =  action.payload.data;
			const poster_url = POSTER_PATH_ROOT + backdrop_path;
			return { id, genres, budget, title, overview, poster_url };
		default: 
			return state;
	}
};