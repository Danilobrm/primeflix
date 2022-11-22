import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000000;
  padding: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: white;
    margin: 0 20px;
    font-weight: bold;
  }

  .logo {
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
  }

  .favoritos {
    cursor: pointer;
    background-color: #fff;
    padding: 5px 14px;
    text-decoration: none;
    color: #000000;
    border-radius: 4px;
    text-align: center;
  }
`;
