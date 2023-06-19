import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  
  // Session expiration time in milliseconds (e.g., 10 mins)
  const SESSION_EXPIRATION_TIME = 600 * 1000;
  
  useEffect(() => {
    const checkExpiration = () => {
      // Check if the session has expired
      const storedUser = sessionStorage.getItem('user');
      const storedTimeout = sessionStorage.getItem('sessionTimeout');

      if (storedUser && storedTimeout) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - parseInt(storedTimeout);

        // Session expired -> logout user
        if (elapsedTime > SESSION_EXPIRATION_TIME) { logout() }
        else {
          setLoginUser(JSON.parse(storedUser));
          setIsAuth(true);
        }
      }
    };

    // Check expiration on app initialization
    checkExpiration();

    // Start a timer to check expiration periodically (every second)
    const intervalId = setInterval(checkExpiration, 1000);

    // Clear the timer on component unmount
    return () => { clearInterval(intervalId); };
  }, []);

  const login = (userData) => {
    try {
      // Store user data and sessionTimeout in session storage
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('sessionTimeout', new Date().getTime().toString());
      setLoginUser(userData);
      setIsAuth(true);
    } catch (error) {
      console.log('Error occurred:', error.message);
    }
  };

  const logout = () => {
    try {
      // Clear user data and sessionTimeout from session storage
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('sessionTimeout');
      setLoginUser(null);
      setIsAuth(false);
    } catch (error) {
      console.log('Error occurred:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, isAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;