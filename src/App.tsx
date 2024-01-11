import React from 'react';
import './App.scss';
import MoonIcon from './assets/icon-moon.svg';
import SearchIcon from './assets/icon-search.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-title-text'>devfinder</div>
        <div className='display-mode'>
         <span className='display-mode-text'>Dark</span> <img src={MoonIcon} className="" alt="moon icon" />
        </div>
      </header>
      <body className='App-body'>
        <search className="searchbar">
          <img src={SearchIcon} className="search-icon" alt="search icon" />
          <button className='search-button'>Search</button>
        </search>
        <div className="user-card"></div>
      </body>
    </div>
  );
}

export default App;
