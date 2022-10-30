import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function ButtonGroup() {
  const router = useRouter();

  const redirectToSignUp = () => {
    router.push('/register');
  };

  return (
    <Stack direction="row" justifyContent="space-between" gap={2}>
      <Button fullWidth onClick={redirectToSignUp}>
        Register
      </Button>
      <Button fullWidth type="submit">
        Login
      </Button>
    </Stack>
  );
}
