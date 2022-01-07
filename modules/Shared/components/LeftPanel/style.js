import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  z-index: 99;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  position: ${({ screenSize }) => screenSize > 1024 ? 'absolute' : 'fixed'};
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    transition: width 0.20s;
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    width: ${({ isActive }) => isActive ? '90%' : '0'};
  }


  @media screen and (min-width: 600px) {
    transition: width 0.20s;
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    width: ${({ isActive }) => isActive ? '40%' : '0'};
  }

  @media screen and (min-width: 1440px) {
    width: 20%;
    opacity: 1;
  }

  & > * {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  background: #20202a;
  overflow-y: scroll;
  align-content: center;
  flex: 1 1 auto;

  section {
    padding: 15px 0;
  }

  h5 {
    font-size: 14px;
    color: white;
  }
`;