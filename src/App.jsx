import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import "./app.css";
import { AuthContext } from './AuthContext.jsx';
import AuthPage from "./AuthPage.jsx";
import ChatsPage from "./ChatsPage.jsx";

function App() {
  const { loginUser, isAuth } = useContext(AuthContext);
  const { isAuthenticated, user } = useAuth0();
  
  if(isAuth) { return <ChatsPage user={loginUser} />; } 
  else if(isAuthenticated) { return <ChatsPage user={user} />; }
  else { return <AuthPage />; }
}

export default App;