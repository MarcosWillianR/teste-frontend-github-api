import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  max-width: 1100px;
  height: 100vh;
  margin: 0 auto;
  padding: 60px 22px;
  background: url(${backgroundImg}) no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 540px) {
    padding: 60px 12px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 84px;
      text-align: center;
      margin-bottom: 12px;
    }

    p {
      font-size: 26px;
      text-align: center;
      margin: 12px 0 22px 0;
    }

    button {
      display: flex;
      align-items: center;
      padding: 12px 22px;
      background: #fff;
      border: 1px solid #ccc;
      text-transform: uppercase;
      font-weight: 500;

      transition: all 0.5s;

      &:hover {
        border-color: transparent;
        background: #222;
        color: #fff;
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 12px;
      }
    }
  }
`;
