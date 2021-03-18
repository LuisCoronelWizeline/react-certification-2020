import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar.component.jsx';
import Footer from './components/Footer/Footer.component.jsx';
import Videos from './components/Videos/Videos.component.jsx';

const MenuBar = styled.div`
  color: white;
`;

function App() {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });

  return (
    <>
      <MenuBar>
        <Navbar />
      </MenuBar>
      <Videos />
      <Footer />
    </>
  );
}

export default App;
