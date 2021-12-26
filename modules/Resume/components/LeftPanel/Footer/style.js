import styled from 'styled-components';

export const Container = styled.footer`
  height: 7%;
  background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0%, rgb(36 36 49) 100%);
  padding: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);

  a {
    cursor: pointer;
    transition: all ease 0.5s;
    color: #8C8C8E;

    &:hover {
      transition: all ease 0.5s;
      color: white;
    }
  }
`;