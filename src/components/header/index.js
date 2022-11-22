import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link className="logo" to="/">
        Primeflix
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus Filmes
      </Link>
    </Nav>
  );
}
