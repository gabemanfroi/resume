import { Stack, styled } from '@mui/material';
import { colors } from 'modules/Shared/theme/colors';

export const Container = styled(Stack)`
  font-family: 'Courier Prime', monospace;
  font-weight: normal;

  span {
    color: ${colors.primaryBlue};
  }

  @media screen and (max-width: 600px) {
    margin-top: 16px;
  }
`;
