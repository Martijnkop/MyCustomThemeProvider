import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Store/store';
import MyCustomThemeProvider from './MyCustomThemeProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <MyCustomThemeProvider>
        <App />
      </MyCustomThemeProvider>
    </Provider>
  </React.StrictMode>,
)
;