import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../store/MoviesSlice';

export const VideoBackground = ({ movieId }) => {
  
  // const [trailer, setTrailer] = useState(null);
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailerVideo);

  const getMovieVideos = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const data = await response.json();

    const filteredVideoTrailers = data.results.filter(video => video.type === 'Trailer');
    const trailer = filteredVideoTrailers.length ? filteredVideoTrailers[0] : data.results[0];
    // setTrailer(trailer);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
