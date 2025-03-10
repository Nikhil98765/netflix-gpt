import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTrailerVideo } from '../store/MoviesSlice';
import { API_OPTIONS } from '../utils/constants';

export const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();

    const filteredVideoTrailers = data.results.filter((video) => video.type === 'Trailer');
    const trailer = filteredVideoTrailers.length ? filteredVideoTrailers[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [movieId]);
};
