import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchResults from './components/searchResults';
import Navigation from './components/navigation';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchResults />
    </div>
  );
}

export default App;
