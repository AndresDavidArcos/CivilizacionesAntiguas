import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/user';
import {MenuSelectionProvider} from "./contexts/menuSelection"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MenuSelectionProvider>
      <App />
      </MenuSelectionProvider>
    </UserProvider>
  </React.StrictMode>
);