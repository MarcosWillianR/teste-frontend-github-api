import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 0 16px;

  span {
    display: flex;
    width: 22.5px;
    height: 22.5px;
    border-radius: 11.25px;
    border: 1px solid transparent;
    border-top-color: #dddddd;
    margin: 0 !important;

    animation: ${spinner} 1s linear infinite;
  }
`;
