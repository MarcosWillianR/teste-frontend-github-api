import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <header>
        <h1>404</h1>
        <p>Parece que essa área ainda não foi descoberta.</p>
        <button type="button" onClick={() => goBack()}>
          <FiChevronLeft />
          Voltar
        </button>
      </header>
    </Container>
  );
};

export default Home;
