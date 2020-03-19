import React from 'react';

import facebookLogo from '../assets/logo.png'
// import { Container } from './styles';

export default function Header() {
  return (
    <header>
      <nav>
        <img src={facebookLogo} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}
