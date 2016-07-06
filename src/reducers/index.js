import { combineReducers } from 'redux';
import { defaultMoviesReducer } from './default_movies'; 
import { getMovieReducer } from './get_movie'; 
import { getGenresReducer } from './get_genres'; 
import { genreMoviesReducer } from './genre_movies'; 


const rootReducer = combineReducers({
  defaultMovies: defaultMoviesReducer,
  movie: getMovieReducer,
  genres: getGenresReducer,
  genreMovies: genreMoviesReducer 
});

export default rootReducer;
