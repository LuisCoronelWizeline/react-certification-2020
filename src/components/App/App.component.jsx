import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import styled from 'styled-components';

import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';
import Videos from '../Videos/Videos.component';

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
