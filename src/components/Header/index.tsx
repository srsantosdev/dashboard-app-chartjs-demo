import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Dashboard App</h1>

        <nav>
          <a href="/">Usuários</a>
          <a href="/">Departamentos</a>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
