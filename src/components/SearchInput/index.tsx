import React, { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input
        placeholder="ex: facebook"
        {...rest}
      />
      <FiSearch size={22} color="#dddddd" />
    </Container>
  )
}

export default SearchInput;
