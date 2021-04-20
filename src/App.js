import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import LoginView from './components/pages/LoginView/LoginView.component.jsx';
import HomeView from './components/pages/HomeView/HomeView.component.jsx';
import VideoDetailsView from './components/pages/VideoDetailsView/VideoDetailsView.component.jsx';
import FavoritesView from './components/pages/FavoritesView/FavoritesView.component.jsx';

import UserState from './context/user/UserState';
import VideosState from './context/videos/VideosState';

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  }, []);

  return (
    <UserState>
      <VideosState>
        <Router>
          <Switch>
            <Route exact path='/loginView' component={LoginView} />
            <Route exact path='/' component={HomeView} />
            <Route exact path='/videoDetail' component={VideoDetailsView} />
            <Route exact path='/favorites' component={FavoritesView} />
          </Switch>
        </Router>
      </VideosState>
    </UserState>
  );
}

export default App;
