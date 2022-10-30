import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material/styles/createTheme';
import { colors } from 'modules/Shared/theme/colors';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiTextField: {
    styleOverrides: {
      root: {
        color: colors.white,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h5: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        lineHeight: 1.7,
        fontSize: 14,
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '&::before': {
          borderBottom: '1px solid white',
        },
        '&::after': {
          borderBottom: `2px solid ${colors.primaryBlue}`,
        },
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: {
        background: colors.primary800,
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        background: colors.primary700,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        background: colors.white,
        color: colors.primary700,
      },
    },
  },
};
