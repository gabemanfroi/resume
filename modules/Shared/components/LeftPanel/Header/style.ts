import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(159deg, rgba(37, 37, 50, .98) 0%, rgb(36 36 49) 100%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex: 0 1 auto;

  button {
    position: absolute;
    top: 16px;
    right: 16px;
  }


  & > span {
    color: #FAFAFC;
    margin-bottom: 8px;

    &:last-child {
      color: #8C8C8E;
    }
  }

`;

export const AvatarContainer = styled.div`
  width: 35%;
  padding-bottom: 35%;
  border-radius: 50%;
  background: url("${({ createdBy }) => createdBy.profilePicture}");
  background-size: cover;
  margin-bottom: 8px;

  @media screen and (min-width: 600px) {
    width: 50%;
    padding-bottom: 50%;
  }
`;
