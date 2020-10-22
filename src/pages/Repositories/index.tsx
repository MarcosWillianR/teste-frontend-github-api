import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiStar, FiAlertCircle, FiChevronLeft } from 'react-icons/fi';

import api from '../../services/apiClient';

import { Container, ListContainer } from './styles';

interface Params {
  user: string | null;
}

interface Repo {
  name: string;
  full_name: string;
  description: string;
  language: string | null;
  open_issues: number;
  stargazers_count: number;
}

const Repositories: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const routeParam = useParams();
  const { goBack } = useHistory();
  const userParam = routeParam as Params;

  useEffect(() => {
    if (userParam.user) {
      api.get<Repo[]>(`${userParam.user}/repos`).then(({ data }) => {
        const formattedRepos = data.map(
          ({
            name,
            full_name,
            description,
            language,
            open_issues,
            stargazers_count,
          }) => ({
            name,
            full_name,
            description,
            language,
            open_issues,
            stargazers_count,
          }),
        );

        setRepos(formattedRepos);
      });
    }
  }, [userParam]);

  return (
    <Container>
      <header>
        <h1>{`Repositórios públicos do(a) ${userParam.user}`}</h1>
        <button type="button" onClick={() => goBack()}>
          <FiChevronLeft />
        </button>
      </header>

      <ListContainer>
        <ul>
          {repos.length >= 1 &&
            repos.map(repo => (
              <>
                <li key={repo.name}>
                  <strong>{repo.name}</strong>
                  <small>{repo.full_name}</small>
                  <p>{repo.description}</p>

                  <div>
                    {repo.language && (
                      <span>
                        <strong>{repo.language}</strong>
                      </span>
                    )}
                    <span>
                      <FiAlertCircle />
                      <strong>{repo.open_issues}</strong>
                    </span>
                    <span>
                      <FiStar />
                      <strong>{repo.stargazers_count}</strong>
                    </span>
                  </div>
                </li>
              </>
            ))}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default Repositories;
