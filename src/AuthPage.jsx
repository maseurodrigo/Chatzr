import React, { useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from './AuthContext.jsx';
import { useAuth0 } from '@auth0/auth0-react';

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  // #1 => Form login method
  const onSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    const { value } = e.target[0];

    // Send a POST request to the endpoint /auth with the provided username
    // If the request is successful, call the 'onAuth' function with the response data and the provided secret
    axios
      .post("http://localhost:3001/auth", { username: value, email: '' })
      .then((r) => login({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  // #2 => Auth0 login method
  const auth0Submit = () => {
    // Check if the user object is undefined
    if ((typeof user === 'undefined' || isLoading) && !isAuthenticated) {
      // Initiate the Auth0 login flow
      loginWithRedirect();
    } else {
      const { name, email } = user;
      // Send a POST request to the endpoint /auth with the provided username
      // If the request is successful, call the 'onAuth' function with the response data and the provided secret
      axios
        .post("http://localhost:3001/auth", { username: name, email: email })
        .then((r) => login({ ...r.data, secret: name }))
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.log('Status code:', error.response.status);
            console.log('Response data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.log('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error:', error.message);
          }
      });
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" required />
          <button className="auth-button" type="submit">
            <FontAwesomeIcon icon={faSignInAlt} className="auth0-icon" />
            <span className='icon-text'>Join ChatZR</span>
          </button>
        </div>
      </form>
      <div className='form-card'>
        <hr className="login-divider"/>
        <button className="auth0-button" onClick={() => auth0Submit()}>
          <FontAwesomeIcon icon={faLock} className="auth0-icon" />
          <span className='icon-text'>Login Auth0</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;