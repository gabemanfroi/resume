import styled from 'styled-components';
import { IUser } from 'modules/Shared/interfaces/IUser';

export const Container = styled.header`
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgb(36 36 49) 100%
  );
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
    color: #fafafc;
    margin-bottom: 8px;

    &:last-child {
      color: #8c8c8e;
    }
  }
`;

export const AvatarContainer = styled.div<{ user: IUser }>`
  width: 35%;
  padding-bottom: 35%;
  border-radius: 50%;
  background: url('${({ user }) =>
    user.profilePictureUrl
      ? user.profilePictureUrl
      : '/assets/images/user_placeholder.jpg'}');
  background-size: cover;
  margin-bottom: 8px;
  position: relative;

  @media screen and (min-width: 600px) {
    width: 50%;
    padding-bottom: 50%;
  }
`;
