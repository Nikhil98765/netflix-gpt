import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../store/MoviesSlice';

export const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const dispatch = useDispatch();

  const fetchMoviesList = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    if (!topRatedMovies) {
      fetchMoviesList();
    }
  }, []);
};
