import { styled, TextField } from '@mui/material';
import { colors } from 'modules/Shared/theme/colors';

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: colors.white,
      color: colors.white,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.white,
      color: colors.white,
    },
    '&.Mui-focused.Mui-error fieldset': {
      borderColor: '#d32f2f',
      color: colors.white,
    },
  },
});
