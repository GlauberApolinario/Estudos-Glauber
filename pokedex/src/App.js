import './App.css';
import React from 'react';
import Route from './Routes/Route';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Route />
    </div>
  );
}

export default App;