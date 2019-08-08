import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
