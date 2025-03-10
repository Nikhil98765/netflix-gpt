import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../store/MoviesSlice';

export const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const dispatch = useDispatch();

  const fetchMoviesList = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    if (!upcomingMovies) {
      fetchMoviesList();
    }
  }, []);
};
