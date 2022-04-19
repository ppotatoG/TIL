import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Box from './Box';
import Hooks from './Hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Box />
        <App />
        <Hooks />
    </React.StrictMode>
);