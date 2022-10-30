import styled from 'styled-components';

export const Container = styled.aside<{ screenSize: number, isActive: boolean }>`
  height: 100%;

  background: #20202A;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all ease 0.55s;
  right: 0;
  top: 0;
  position: ${({ screenSize }) => screenSize < 992 ? 'fixed' : 'relative'};

  .current-page-container {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      opacity: ${({ isActive }) => isActive ? 0 : 1};
      transition: opacity 0.55s;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: 500;
      color: #8C8C8E;
      transform: rotate(90deg);

    }

  }
`;

export const NavContainer = styled.nav<{ isActive: boolean }>`
  width: 100%;
  padding: 16px;

  ul {
    color: #8C8C8E;
    font-weight: 500;
    transition: opacity 0.3s;
    opacity: ${props => props.isActive ? 1 : 0};
    text-transform: uppercase;
    list-style: none;

    li {
      font-size: 13px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: color ease 0.55s;

      &.is-active, &:hover {
        color: #fafafc;
        text-shadow: 0 0 3px rgb(250 250 252 / 40%);
        
      }
    }
  }
`;
