import React from 'react';
import './styles/App.scss';
import Navigation from './Navigation';
import Main from './Main';
import Bottom from './Bottom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Bottom/>
    </div>
  );
}

export default App;
