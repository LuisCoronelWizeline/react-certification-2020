import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import HomeView from './components/pages/HomeView/HomeView.component.jsx';
import VideoDetailsView from './components/pages/VideoDetailsView/VideoDetailsView.component.jsx';

import VideosState from './context/videos/VideosState';

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });

  return (
    <VideosState>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/videoDetail' component={VideoDetailsView} />
        </Switch>
      </Router>
    </VideosState>
  );
}

export default App;
