import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer red">
      <div className="center-align" style={footerText}>© Luis Coronel</div>
    </footer>
  );
};

const footerText = {
  backgroundColor: "#ff0000",
}

export default Footer;
