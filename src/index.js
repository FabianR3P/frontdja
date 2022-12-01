import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import {QuotesContextProvider} from "./context/QuotesContext"

import { LayoutApp } from './components/LayoutApp';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuotesContextProvider>
    <ThemeProvider><LayoutApp>
      <App />
    </LayoutApp></ThemeProvider>
    </QuotesContextProvider>
  </React.StrictMode>
);

