import { Stack } from '@mui/material';
import { colors } from 'modules/Shared/theme/colors';
import Form from 'modules/Login/components/Form';

export default function Login() {
  return (
    <Stack
      sx={{ height: '100vh' }}
      alignItems="center"
      justifyContent={'center'}
      p={8}
    >
      <Stack
        sx={{ background: colors.primary800, height: '100%', width: '100%' }}
        alignItems="center"
        justifyContent={'center'}
      >
        <Form />
      </Stack>
    </Stack>
  );
}
