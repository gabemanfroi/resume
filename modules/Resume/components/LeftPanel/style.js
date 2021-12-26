import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 20%;

  & > * {
    width: 100%;
  }
`;

export const Header = styled.header`
  background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0%, rgb(36 36 49) 100%);
  height: 30%;
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > span {
    color: #FAFAFC;
    margin-bottom: 8px;

    &:last-child {
      color: #8C8C8E;
    }
  }

`;

export const Content = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 63%;
  background: #20202a;
  overflow-y: scroll;
  align-content: center;

  section {
    padding: 15px 0;
  }

  h5 {
    font-size: 14px;
    color: white;
  }
`;


export const AvatarContainer = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: white;
  margin-bottom: 8px;
`;


export const Divider = styled.div`
  height: 1px;
  background: #8c8c8e;
  opacity: 0.3;
`;