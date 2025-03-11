import React from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[5%] px-9  w-screen aspect-video md:pt-[10%] md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="pt-[10%] md:pt-[1%]">
        <button className="p-1 px-2 md:p-3 md:px-6 bg-white text-black md:text-xl rounded-lg hover:bg-opacity-70">
          <PlayArrowRoundedIcon fontSize="medium"></PlayArrowRoundedIcon>
          <span className="pe-3">Play</span>
        </button>
        <button className="p-1 px-3 mx-2 bg-white text-white md:p-3 md:px-6 md:text-xl rounded-lg bg-opacity-20 hover:bg-opacity-10">
          <InfoOutlinedIcon fontSize="medium"></InfoOutlinedIcon>
          <span className="ms-1 pe-1 md:ms-2 md:pe-3">More Info</span>
        </button>
      </div>
    </div>
  );
};
