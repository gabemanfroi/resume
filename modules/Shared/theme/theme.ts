import { createTheme } from '@mui/material';
import { palette } from 'modules/Shared/theme/palette';
import { components } from 'modules/Shared/theme/components';

export const theme = createTheme({
  palette,
  components,
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
