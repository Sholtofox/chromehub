import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>In here for the beginning</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form method="get" title="Search Form" action="https://cse.google.com/cse/publicurl">
          <div>
            <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
            <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
            <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" />
          </div>
        </form>

      </header>
    </div>
  );
}

export default App;
