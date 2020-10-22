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

  @media screen and (max-width: 540px) {
    padding: 60px 12px;
  }

  header {
    margin-bottom: 60px;
    text-align: center;

    h1 {
      font-size: 26px;
      text-align: center;
      margin-bottom: 12px;
    }

    button {
      padding: 12px;
      background: 0;
      border: 0;

      svg {
        transition: color 0.5s;
        width: 28px;
        height: 28px;
      }

      &:hover svg {
        color: #444;
      }

      @media screen and (max-width: 540px) {
        margin-bottom: 60px;
      }
    }
  }
`;

export const ListContainer = styled.div`
  ul {
    max-height: 600px;
    overflow-y: auto;
    padding: 0 22px;

    display: flex;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: all 0.5s;
      padding: 12px;
      margin-bottom: 22px;

      strong {
        font-size: 16px;
        font-weight: 500;
        color: #222;
        margin-bottom: 2px;
      }

      small {
        font-size: 12px;
        margin: 2px 0 4px 0;
        color: #666;
      }

      p {
        font-size: 14px;
        margin: 2px 0 4px 0;
        color: #333;
        text-align: center;

        width: 300px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        @media screen and (max-width: 640px) {
          display: none;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-items: space-between;

        svg {
          width: 18px;
          height: 18px;
          color: #222;
          margin-left: 12px;
        }

        span {
          display: flex;
          align-items: center;
          margin-top: 4px;
          font-size: 12px;

          strong {
            font-size: 13px;
            margin: 0 6px;
          }
        }
      }
    }
  }
`;
