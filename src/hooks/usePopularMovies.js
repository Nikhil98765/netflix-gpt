import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addPopularMovies } from '../store/MoviesSlice';

export const usePopularMovies = () => {
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const dispatch = useDispatch();

  const fetchMoviesList = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    if (!popularMovies) {
      fetchMoviesList();
    }
  }, []);
};
