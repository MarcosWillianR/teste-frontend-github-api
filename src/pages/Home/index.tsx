import React, { useCallback, useState } from 'react';
import { FiBook, FiStar, FiX } from 'react-icons/fi';

import SearchInput, { userData } from '../../components/SearchInput';

import { Container, ListContainer, UserInfo, ActionButtons } from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<userData[]>([]);

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

  return (
    <Container>
      <header>
        <h1>Pesquisar por usuário</h1>
        <SearchInput responseItems={handleSearchNewUser} />
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
                    <button type="button">
                      <FiBook />
                    </button>
                    <button type="button">
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
