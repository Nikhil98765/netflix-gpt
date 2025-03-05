import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGE_OPTIONS, NETFLIX_LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../store/GptSlice';
import { changeLanguage } from '../store/ConfigSlice';

const Header = () => {
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectLanguage = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-36" src={NETFLIX_LOGO} alt="logo" />
        {user && (
          <>
            <div className="flex p-2">
              {showGptSearch && (
                <select
                  className="p-2 m-2 bg-black text-white rounded-lg"
                  onChange={handleSelectLanguage}>
                  {LANGUAGE_OPTIONS.map((lang) => {
                    return (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    );
                  })}
                </select>
              )}
              <button
                className="py-2 px-4 my-2 mx-4 bg-purple-500 rounded-lg text-white"
                onClick={handleGptSearchClick}>
                {showGptSearch ? 'Home' : 'GPT Search'}
              </button>
              <img className="w-12 h-12" src={user.photoURL} alt="user logo" />
              <button onClick={handleSignOut} className="font-bold text-white">
                (Sign out)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
