import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import Navbar from './components/Navbar/Navbar.component.jsx';
import Footer from './components/Footer/Footer.component.jsx';
import Videos from './components/Videos/Videos.component.jsx';

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });

  return (
    <>
      <Navbar />
      <Videos />
      <Footer />
    </>
  );
}

export default App;
