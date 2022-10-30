import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginTextField from 'modules/Login/components/Form/TextField';
import { Button, Stack } from '@mui/material';
import { IRegisterForm } from 'modules/Register/interfaces/IRegisterForm';
import { registerSchema } from 'modules/Register/schema/registerSchema';
import { AuthService } from 'modules/Shared/services';
import { useRouter } from 'next/router';

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter();

  const onValid = async (data: IRegisterForm) => {
    await AuthService.register(data);
    await router.push(`/showcase/${data.username}`);
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={handleSubmit(onValid)}
    >
      <Stack direction="row" gap={2}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <LoginTextField
              value={value}
              onChange={onChange}
              error={!!errors.email}
              label="E-mail"
              placeholder="Email"
              type="email"
              helperText={!!errors.email ? errors.email.message : ''}
            />
          )}
        />
        <Controller
          control={control}
          name="username"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <LoginTextField
              value={value}
              onChange={onChange}
              error={!!errors.username}
              label="Username"
              placeholder="Username"
              helperText={!!errors.username ? errors.username.message : ''}
            />
          )}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <LoginTextField
              value={value}
              onChange={onChange}
              error={!!errors.password}
              label="Password"
              placeholder="Password"
              type="password"
              helperText={!!errors.password ? errors.password.message : ''}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <LoginTextField
              value={value}
              onChange={onChange}
              error={!!errors.confirmPassword}
              label="Confirm Password"
              placeholder="Confirm Your Password"
              type="password"
              helperText={
                !!errors.confirmPassword ? errors.confirmPassword.message : ''
              }
            />
          )}
        />
      </Stack>
      <Button type="submit">Register</Button>
    </form>
  );
}
