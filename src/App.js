import React from 'react';
import './assets/scss/style.scss';
import Routes from './routes/Index';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
