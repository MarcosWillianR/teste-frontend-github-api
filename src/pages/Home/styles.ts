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
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 26px;
      text-align: center;
      margin-bottom: 12px;

      @media screen and (max-width: 540px) {
        margin-bottom: 60px;
      }
    }

    margin-bottom: 60px;

    span {
      margin-top: 12px;
      color: #dd371a;
      text-align: center;

      span {
        margin-left: 4px;
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

    .remove-user {
      width: 100%;
      margin-bottom: 22px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 0;
      border: 1px solid #ccc;
      background: #fff;
      padding: 12px;
      transition: all 0.5s;

      &:hover {
        background: #f4f4f4;
      }

      @media screen and (max-width: 540px) {
        padding: 6px;
      }

      svg {
        width: 22px;
        height: 22px;
        color: #222;
      }
    }

    li {
      display: flex;
      align-items: center;
      background: #fff;
      border: 1px solid #ccc;
      border-bottom: 0;
      border-top-left-radius: 4px;
      transition: all 0.5s;

      img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 2px solid #ddd;
        margin: 12px 0 12px 12px;

        @media screen and (max-width: 540px) {
          width: 45px;
          height: 45px;
        }
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;

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

    width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-items: space-between;

    span {
      margin-top: 4px;
      font-size: 12px;

      strong {
        font-size: 13px;
        margin: 0 6px;
      }
    }

    span:nth-of-type(1) strong {
      margin-left: 0;
    }
  }
`;

export const ActionButtons = styled.div`
  align-self: stretch;
  border-top-right-radius: 4px;
  margin-left: auto;

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }

  button {
    height: 100%;
    border: 0;
    background: #fff;
    padding: 12px 22px;
    transition: all 0.5s;

    @media screen and (max-width: 540px) {
      padding: 12px;
    }

    &:hover {
      background: #f4f4f4;
    }

    svg {
      width: 22px;
      height: 22px;
      color: #222;
    }

    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
