import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)`
  .languages-list {
    justify-content: space-around;
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid rgba(140, 140, 142, 0.3);

    .language {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;

      span {
        font-size: 13px;
        color: white;
      }
    }
  }
`;
