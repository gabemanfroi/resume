import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: transparent;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.55s;
  z-index: 999;

  @media screen and (max-width: 1024px) {
    height: 70px;
  }
`;