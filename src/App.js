import React from 'react';

import { Switch, Route } from 'react-router';

import './App.css';

import Welcome from 'pages/welcome';
import PostPage from 'pages/postPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route path="/post/:id" render={() => <PostPage />} />
      </Switch>
    </div>
  );
}

export default App;
