import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx'
import AuthContext from './AuthContext.jsx';
import Auth0ProviderWithHistory from './auth0Provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Auth0ProviderWithHistory>
            <AuthContext>
                <App/>
            </AuthContext>
        </Auth0ProviderWithHistory>
    </Router>
)
