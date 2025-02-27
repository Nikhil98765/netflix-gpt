import { useRef, useState } from "react"; 
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Header from "./Header";
import { checkValidSignInData, checkValidSignUpData } from "../utils/validations";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserSlice";

const Login = ({onSignUp}) => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
 

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    const message = !isSignIn
      ? checkValidSignUpData(
          fullNameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        )
      : checkValidSignInData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameRef.current.value, 
            photoURL:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e",
          }).then(() => {
            const { email, displayName, uid, photoURL } = auth.currentUser;
            dispatch(addUser({ email, displayName, uid, photoURL }));
            console.log("🚀 ~ .then ~ updateProfile")
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' - ' + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("🚀 ~ .then ~ user:", user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg"
             alt="Netflix Logo"/>
      </div>
      <form onSubmit={onSubmitForm} className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isSignIn &&
          <input type='text'
                 ref={fullNameRef}
                 placeholder="Full Name"
                 className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        }
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          { isSignIn ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now' }
        </p>
      </form>
    </div>
  );
};

export default Login;
