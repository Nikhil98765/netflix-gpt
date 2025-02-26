import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInData, checkValidSignUpData } from "../utils/validations";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    const errorMessage = !isSignIn
      ? checkValidSignUpData(
          fullNameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        )
      : checkValidSignInData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(errorMessage);
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
