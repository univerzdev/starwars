import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from '@mui/material/styles'
import Router from './routes/Router';

import AppProvider from "./contexts/AppProvider";
import { materialTheme } from "./data/materialTheme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={materialTheme}>
          <AppProvider>
            <Router>
             <App />
            </Router>
          </AppProvider>
        </ThemeProvider>
      </QueryClientProvider>
   
);

reportWebVitals();
