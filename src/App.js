import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Funchal" />
        <footer>
          This projec was coded by Raquel Coelho and is{' '}
          <a href="https://github.com/RaqueCoelho/react-weather-app">open sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
