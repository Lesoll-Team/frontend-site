
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerStart, registerSuccess, registerFailure } from '../redux-store/features/userSlice';
import { useQueryClient } from 'react-query';
import { registerUser } from '../utils/api';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.User.isRegistering);
  const registrationError = useSelector((state) => state.User.registrationError);
  const queryClient = useQueryClient();


  const [type, setType] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(registerStart());

    try {
      const userData = { fullname, password,email,countryCode,phoneNumber,type };
      const newUser = await registerUser(userData);
      dispatch(registerSuccess());

      // Assuming you want to invalidate the user list query to trigger a refetch
      queryClient.invalidateQueries('users');

      console.log('User registered:', newUser);

      // Clear the form fields after successful registration
      setFullname('');
      setPassword('');
      setEmail('');
      setCountryCode('');
      setPhoneNumber('');
      setType('');
      
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="type">type :</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fullname">fullname :</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">email :</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">phoneNumber :</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>


        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isRegistering}>
          {isRegistering ? 'Registering...' : 'Register'}
        </button>
        {registrationError && <p>Error: {registrationError}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
