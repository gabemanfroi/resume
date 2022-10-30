import { Stack } from '@mui/material';
import { colors } from 'modules/Shared/theme/colors';
import Form from 'modules/Register/components/Form';

export default function Register() {
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
