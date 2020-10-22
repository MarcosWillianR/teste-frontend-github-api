import React, { useCallback, useEffect, useState } from 'react';
import { FiBook, FiStar, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import SearchInput, { userData } from '../../components/SearchInput';

import { Container, ListContainer, UserInfo, ActionButtons } from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<userData[]>(() => {
    const storagedUsers = localStorage.getItem('@Github:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }

    return [];
  });
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const history = useHistory();

  const handleSearchNewUser = useCallback(
    (newUser: userData | null) => {
      if (newUser) {
        const sameUser = users.find(user => user.login === newUser.login);

        if (sameUser) return;

        setUsers(state => [...state, newUser]);
      }
    },
    [users],
  );

  const handleRemoveUser = useCallback(login => {
    setUsers(state => state.filter(user => user.login !== login));
  }, []);

  const handleSearchError = useCallback((message: string) => {
    setSearchErrorMessage(message);
  }, []);

  useEffect(() => {
    localStorage.setItem('@Github:users', JSON.stringify(users));
  }, [users]);

  return (
    <Container>
      <header>
        <h1>Pesquisar por usuário</h1>
        <SearchInput
          error={handleSearchError}
          responseItems={handleSearchNewUser}
        />

        {searchErrorMessage && (
          <span>
            {searchErrorMessage}
            <span role="img" aria-label="carinha triste">
              😢
            </span>
          </span>
        )}
      </header>

      <ListContainer>
        <ul>
          {users.length >= 1 &&
            users.map(user => (
              <>
                <li key={user.login}>
                  <img src={user.avatar_url} alt={user.name} />

                  <UserInfo>
                    <strong>{user.name}</strong>
                    <small>{`${user.login} - ${user.location}`}</small>
                    <p>{user.bio}</p>

                    <div>
                      <span>
                        <strong>{user.public_repos}</strong>
                        Repos
                      </span>
                      <span>
                        <strong>{user.followers}</strong>
                        Seguidores
                      </span>
                      <span>
                        <strong>{user.following}</strong>
                        Seguindo
                      </span>
                    </div>
                  </UserInfo>

                  <ActionButtons>
                    <button
                      type="button"
                      onClick={() => history.push(`${user.login}/repositories`)}
                    >
                      <FiBook />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        history.push(`${user.login}/repositories/starred`)
                      }
                    >
                      <FiStar />
                    </button>
                  </ActionButtons>
                </li>
                <button
                  onClick={() => handleRemoveUser(user.login)}
                  type="button"
                  className="remove-user"
                >
                  <FiX />
                </button>
              </>
            ))}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default Home;
