import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://66.media.tumblr.com/b27ca2192e8881523be0ef9cc7e32727/tumblr_muqinkr95j1s9bsz2o5_250.png"/>
        <p>
          <code>Extension being built! Come back soon ^-^</code>
        </p>
        <div>
          <form method="get" title="Search Form" action="https://cse.google.com/cse/publicurl">
            <div>
              <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
              <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
              <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" />
            </div>
          </form>
        </div>

      </header>
    </div>
  );
}

export default App;
