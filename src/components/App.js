import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import Routes from '../Routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the App component</h1>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </nav>
        <div>
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;
