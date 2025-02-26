
export const checkValidSignInData = (email, password) => {
  const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
  const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
  
  if (!isEmailValid) return 'Email is not valid';
  if (!isPasswordValid) return 'Password is not valid';

  return null;
}

export const checkValidSignUpData = (fullName, email, password) => {
  const isFullNameValid = /^[a-zA-Z ]{2,30}$/.test(fullName);
  const isEmailValid =
    /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
  const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

  if (!isFullNameValid) return "Full Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
}