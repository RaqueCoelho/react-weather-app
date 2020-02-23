import React from 'react';
import logo from './logo.svg';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This projec was coded by Raquel Coelho and is{' '}
          <a href="https://github.com/RaqueCoelho/react-weather-app" target="_blank">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
