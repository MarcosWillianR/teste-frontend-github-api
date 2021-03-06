import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from '../../services/apiClient';
import { debounce } from '../../utils';

import Loading from '../Loading';

import { Container } from './styles';

export interface userData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  responseItems(data: userData): void;
  error(message: string): void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  responseItems,
  error,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleGetUser = useCallback(
    async (user: string) => {
      try {
        const { data } = await api.get<userData>(`${encodeURIComponent(user)}`);

        const {
          avatar_url,
          login,
          name,
          location,
          bio,
          public_repos,
          followers,
          following,
        } = data;

        responseItems({
          avatar_url,
          login,
          name,
          location: location || 'Endereço não informado',
          bio: bio || 'Bio não informada',
          public_repos,
          followers,
          following,
        });
        error('');
      } catch {
        error(
          `parece que o usuário ${user} foi para o espaço e não conseguimos contatá-lo`,
        );
      } finally {
        setLoading(false);
        setInputValue('');
      }
    },
    [responseItems, error],
  );

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (!target.value) return;

      setInputValue(target.value);

      setLoading(true);

      debounce({
        callback: async () => {
          await handleGetUser(target.value);
        },
        delay: 500,
      });
    },
    [handleGetUser],
  );

  return (
    <Container>
      <input
        placeholder="ex: facebook"
        onChange={handleChange}
        value={inputValue}
        {...rest}
      />
      {loading ? <Loading /> : <FiSearch size={22} color="#dddddd" />}
    </Container>
  );
};

export default SearchInput;
