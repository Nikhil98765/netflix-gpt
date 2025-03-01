import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../store/UserSlice";
import { Outlet } from "react-router-dom";
import { auth } from "../utils/firebase";



const Body = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate(); 

  useEffect(() => {
    // Triggers on every auth change
    /** 
     * Note: onAuthStateChanged triggers twice because of initial sign-in and token refresh.
            This is the default behavior of Firebase for consistent authentication states.
            Use a flag or one-time listener if you need to avoid the double trigger.
    */
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({ email, displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }

      return () => {
        unsubscribe();
      }
    });
  }, [dispatch, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
