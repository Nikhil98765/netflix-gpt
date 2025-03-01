import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {

  const user = useSelector(state => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-36"
          src={NETFLIX_LOGO}
          alt="logo"
        />
        {user && (
          <div className="flex p-2 w-40">
            <img
              className="w-12 h-12"
              src={user.photoURL}
              alt="user logo"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
