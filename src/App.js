import React from 'react';

import { Switch, Route } from 'react-router';

import './App.css';

import Welcome from 'pages/welcome';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
      </Switch>
    </div>
  );
}

export default App;
