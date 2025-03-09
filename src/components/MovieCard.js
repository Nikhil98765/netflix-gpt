import { IMG_CDN } from '../utils/constants';

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-2">
      <img src={IMG_CDN + posterPath} alt="poster image" />
    </div>
  );
};
