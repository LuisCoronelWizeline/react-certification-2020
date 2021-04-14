import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer" style={footerColor}>
      <div className="footer-copyright">
        <div className='container center'>
          © Luis Coronel - React bootcamp challenge 2021
        </div>
      </div>
    </footer>
  );
};

const footerColor = {
  backgroundColor: "red",
}

export default Footer;
