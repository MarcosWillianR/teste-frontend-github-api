import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    border-color: #fff;
  }

  input {
    border: 0;
    background: transparent;
    flex: 1;
    align-self: stretch;
    padding: 0 12px;

    &::placeholder {
      color: #ddd;
    }
  }

  svg {
    margin: 0 16px;
  }
`;
