import React from 'react';
import { FiBook, FiStar } from 'react-icons/fi';

import SearchInput from '../../components/SearchInput';

import { Container, ListContainer, UserInfo, ActionButtons } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Pesquisar por usuário</h1>
        <SearchInput />
      </header>

      <ListContainer>
        <ul>
          <li>
            <img src="https://avatars2.githubusercontent.com/u/43147902?v=4" alt="Marcos Willian" />

            <UserInfo>
              <strong>Marcos Willian</strong>
              <small>MarcosWillianR - Porto Alegre, Brazil</small>
              <p>Desenvolvedor Front (React) e Back-end (Node.js)</p>

              <div>
                <span>
                  <strong>36</strong>
                Repos
              </span>
                <span>
                  <strong>10</strong>
                Seguidores
              </span>
                <span>
                  <strong>9</strong>
                Seguindo
              </span>
              </div>
            </UserInfo>

            <ActionButtons>
              <button type="button">
                <FiBook />
              </button>
              <button type="button">
                <FiStar />
              </button>
            </ActionButtons>
          </li>
          <li>
            <img src="https://avatars2.githubusercontent.com/u/43147902?v=4" alt="Marcos Willian" />

            <UserInfo>
              <strong>Marcos Willian</strong>
              <small>MarcosWillianR - Porto Alegre, Brazil</small>
              <p>Desenvolvedor Front (React) e Back-end (Node.js)</p>

              <div>
                <span>
                  <strong>36</strong>
                Repos
              </span>
                <span>
                  <strong>10</strong>
                Seguidores
              </span>
                <span>
                  <strong>9</strong>
                Seguindo
              </span>
              </div>
            </UserInfo>

            <ActionButtons>
              <button type="button">
                <FiBook />
              </button>
              <button type="button">
                <FiStar />
              </button>
            </ActionButtons>
          </li>

        </ul>
      </ListContainer>
    </Container>
  )
}

export default Home;
