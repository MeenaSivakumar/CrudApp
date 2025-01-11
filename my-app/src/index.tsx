/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'client' from react-dom
import App from './app';
import './styles/global.css'; // Optional global styles

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
