
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux-store/features/loginSlice';
import { loginUser } from '../utils/api';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.Login.isLoading);
  const loginError = useSelector((state) => state.Login.error);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());

      const userRespons = { email, password };
      const response = await loginUser( userRespons);
      console.log(response);
      const user = response.userData; // Assuming your API returns the user object after successful login
      
      // const {email,TypeOfUser,fullname,images,token}=user
    //  localStorage.setItem(userLocalData ,user )
    //     console.log(localStorage.getItem(userLocalData));

      dispatch(loginSuccess(user));

      // Clear form fields after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      dispatch(loginFailure('Invalid email or password'));
    }
  };




  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Login'}
        </button>
        {loginError && <div>{loginError}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
