import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getStage from './stage';
import getConfig from './config';

export const Context = createContext({});
const config = getConfig(getStage());

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={config}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
