import React from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="p-3 px-6 bg-white text-black text-xl rounded-lg hover:bg-opacity-70">
          <PlayArrowRoundedIcon fontSize="large"></PlayArrowRoundedIcon>
          <span className="pe-3">Play</span>
        </button>
        <button className="mx-2 bg-white text-white p-3 px-6 text-xl rounded-lg bg-opacity-20 hover:bg-opacity-10">
          <InfoOutlinedIcon fontSize="large"></InfoOutlinedIcon>
          <span className="ms-2 pe-3">More Info</span>
        </button>
      </div>
    </div>
  );
};
