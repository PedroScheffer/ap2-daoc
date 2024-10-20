import React from 'react';
import './Footer.css';

function Footer({ title}) {
  return (
    <footer className="footer">
      <h2 className="footer-title">{title}</h2>
      <p className="footer-subtitle">Projeto concluído em: 19/10/2024</p>
    </footer>
  );
}

export default Footer;